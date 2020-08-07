import awsServerlessExpress from 'aws-serverless-express'

import controller from '.'

const server = awsServerlessExpress.createServer(controller.webserver)

exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context)
