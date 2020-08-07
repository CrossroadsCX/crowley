require('dotenv').config()

module.exports = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  CLIENT_SIGNING_SECRET: process.env.CLIENT_SIGNING_SECRET,
  PORT: process.env.PORT || 3000,
  VERIFICATION_TOKEN: process.env.VERIFICATION_TOKEN,
  WEBHOOK_URI: process.env.WEBHOOK_URI,
}
