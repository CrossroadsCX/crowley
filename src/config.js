require('dotenv').config()

const {
  BOT_TOKEN,
  CLIENT_SIGNING_SECRET,
  PORT = 3000,
  VERIFICATION_TOKEN,
  WEBHOOK_URI,
} = process.env

export {
  BOT_TOKEN,
  CLIENT_SIGNING_SECRET,
  PORT,
  VERIFICATION_TOKEN,
  WEBHOOK_URI,
}
