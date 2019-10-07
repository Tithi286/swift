import express from 'express'
//import { postJobOpening } from '../services/slack'
import { readChannelHistory, forward } from '../services/slack'

const router = new express.Router()

router.post('/commands', async (req, res) => {
    /* // app sends response
    console.log(req.body.command)
    
    console.log("command request body is ", req.body)

    res.status(200).send('Thanks.')*/

    /* // app replies with text given after slash command
    let status = 200
    await postJobOpening(process.env.jobs_channel, req.body.text)
        .catch(() => {
            status = 503
        })
    res.status(status).send('Slash command completed.')*/

    let channelHistory = ""
    // which message to forward, 0 is most recently posted
    let msgIndex = 0

    let status = 200
    channelHistory = await readChannelHistory(process.env.support_channel)
        .catch(() => {
            status = 503
        })
    // res.status(status).send('Slash command completed.')
    
    // console.log("command request body is")
    // console.log(req.body)

    // console.log('channel history is')
    // console.log(channelHistory)
    let forwardedMessage = channelHistory.messages[msgIndex].text
    console.log('most recent message is:', forwardedMessage)

    status = 200
    await forward(process.env.general_channel, forwardedMessage)
        .catch(() => {
            status = 503
        })
    res.status(status).send('Slash command completed.')
})

export default router