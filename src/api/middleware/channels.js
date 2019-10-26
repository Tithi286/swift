export default async (req, res, next) => {
    console.log(req.body)
    if (req.body.type === "url_verification" || req.body.event.channel === process.env.support_channel) {
        next()
    }
    //next()
}