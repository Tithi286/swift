import express from 'express'
import { postJobOpening } from '../services/slack'

const router = new express.Router()

router.post('/commands', async (req, res) => {
    /*console.log(req.body.command)
    
    console.log("command request body is ", req.body)

    res.status(200).send('Thanks.')*/
    
    let status = 200
    await postJobOpening(process.env.jobs_channel, req.body.text)
        .catch(() => {
            status = 503
        })
    res.status(status).send('Slash command completed.')
    
    console.log("command request body is")
    console.log(req.body)
})

export default router