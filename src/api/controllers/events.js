import express from 'express'
import filterChannels from '../middleware/channels'

import { readChannelHistory, forward } from '../services/slack'

const router = new express.Router()

// only forward messages posted on the support channel
router.post('/events', filterChannels, async (req, res) => {
    // console.log('event detected')
    // console.log(req.body)

    // which message text to forward, 0 is most recently posted
    let msgIndex = 0

    let status = 200
    await readChannelHistory(process.env.support_channel)
        .then(response => {
            let channelHistory = response
            let forwardedMessage = channelHistory.messages[msgIndex].text
            forward(process.env.general_channel, forwardedMessage)
        })
        .catch(() => {
            status = 503
        })
    res.status(status).send(req.body.challenge)
})

export default router