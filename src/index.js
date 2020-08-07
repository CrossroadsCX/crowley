import bodyParser from 'body-parser'
import Debug from 'debug'
import express from 'express'
import http from 'http'
import path from 'path'

import { Botkit } from 'botkit'
import { SlackAdapter, SlackEventMiddleware } from 'botbuilder-adapter-slack'

import {
  BOT_TOKEN,
  CLIENT_SIGNING_SECRET,
  PORT,
  VERIFICATION_TOKEN,
  WEBHOOK_URI,
} from './config'

const debug = Debug('crowley:index')

const webserver = express()

webserver.use((req, res, next) => {
  req.rawBody = ''
  req.on('data', (chunk) => {
    req.rawBody += chunk
  })

  next()
})

webserver.use(bodyParser.json())
webserver.use(bodyParser.urlencoded({ extended: true }))

const adapter = new SlackAdapter({
  enable_incomplete: true,
  verificationToken: VERIFICATION_TOKEN,
  clientSigningSecret: CLIENT_SIGNING_SECRET,
  botToken: BOT_TOKEN,
})

adapter.use(new SlackEventMiddleware())

export const controller = new Botkit({
  webhook_uri: WEBHOOK_URI,
  adapter,
  webserver,
})

controller.loadModules(path.resolve(__dirname, './features'))

debug(require.main)

if (require.main === module) {
  const httpserver = http.createServer(webserver)
  httpserver.listen(PORT, () => {
    debug(`Webhook endpoint online: http://127.0.0.1:${PORT}${WEBHOOK_URI}`)
  })
}
