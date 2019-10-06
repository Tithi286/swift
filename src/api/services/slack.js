import slack from 'slack'

// module.exports.forward = (channel, text) => slack.chat.postMessage({token: process.env.slack_app_token, channel, text})
module.exports.forward = (channel) => slack.channels.history({token: process.env.slack_app_token, channel})