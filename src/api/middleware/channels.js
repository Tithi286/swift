export default async (req, res, next) => {
    if (req.body.event.channel === process.env.support_channel) {
        next()
    }
}