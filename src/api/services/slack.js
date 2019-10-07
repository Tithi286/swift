import slack from 'slack'

// module.exports.postJobOpening = (channel, text) => slack.chat.postMessage({token: process.env.slack_app_token, channel, text})
module.exports.readChannelHistory = (channel) => slack.channels.history({token: process.env.slack_app_token, channel})
module.exports.forward = (channel, text) => slack.chat.postMessage({token: process.env.slack_app_token, channel, text})