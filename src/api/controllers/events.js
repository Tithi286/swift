import express from 'express'

const router = new express.Router()

router.post('/events', async (req, res) => {
    let status = 200
    console.log('event detected')
    console.log(req.body)
    res.status(status).send(req.body.challenge)
})

export default router