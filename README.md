<!--I would like you guys to tweak this a bit. Make it for supporting employees within an enterprise. develop a slack plug-in application which looks at individual messages in a slack support channel and routes the problem to the right people. NER tagger is a good idea. The app should also have a dashboard that can pull stats to help guide the support team planning and taking pro-active actions. Goal is to provide faster and inexpensive support. -->

# SWIFT
SWIFT provides faster, inexpensive support for employees. The application uses NER (Named-Entity Recognition) to extract relevant details from employee messages and forwards them to the appropriate department or party which can handle the issue.

# Abstract
<!--Today, Customer Service is very important in businesses. If customer complaints are not handled quickly, that leads to dissatisfaction which can promote a decrease in sales in the long run. So successful businesses do require the complaints to be addressed quickly. And when there are a lot of customer complaints to be addressed, it takes some time to forward the complaints to the respective department and solve the issue. In that scenario, SWIFT can help the businesses by forwarding the emails to the concerned department without any need of employees. This will reduce the time to solve the issue.-->

Employee productivity and satisfaction are absolutely essential to businesses. If employees are unable to quickly get support on problems they have, frustrations rise, output drops, and a business's sales wil suffer in the long run. In a large company with many employees spread across departments with different responsibilities, it takes time to forward an issue to someone who can address it. A support team may handle an employee support channel in an online workspace, such as Slack. The team must read through all employee messages, decide who to send each message to, and coordinate further actions between the people involved. Much cost and effort is spent to do this.

Swift is a Slack plug-in application which will automate the process of sending employee messages to the right people. It looks at individual messages in a Slack support channel and routes the problem to the right people. The app also has a dashboard that can pull stats to help guide the support team's planning and taking pro-active actions.

# Architecture Diagram

# Technology Stack
Node JS, Express JS, Slack API, Stanford NER tagger.


