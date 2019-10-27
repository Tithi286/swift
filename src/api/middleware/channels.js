import { listChannels } from '../services/slack'

let support_channel = ''
let general_channel = ''
export default async (req, res, next) => {
    console.log(req.body)

    let status = 200
    await listChannels()
        .then(response => {
            // console.log("list of channels:")
            // console.log(response.channels)
            // console.log("channel length:", response.channels.length)
            for (let i = 0; i < response.channels.length; i++)
            {
                let channel_id = response.channels[i].id
                let channel_name = response.channels[i].name
                // console.log("channel id:", channel_id)
                // console.log("channel name:", channel_name)
                if (channel_name === 'support')
                {
                    support_channel = channel_id
                }
                else if (channel_name === 'general')
                {
                    general_channel = channel_id
                }
            }
            // trying to exit the then function
            // return Promise.resolve(response)
        })
        .catch(() => {
            status = 503
        })

    // console.log('support channel id:', support_channel)
    if (req.body.type === "url_verification" || req.body.event.channel === support_channel) {
        next()
    }
    //next()
}

export { support_channel, general_channel }