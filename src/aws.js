const
  TABLE_NAME = process.env.TABLE_NAME,
  TOPIC_NAME = process.env.TOPIC_NAME,
  AWS_REGION = process.env.AWS_REGION

const
  AWS = require('aws-sdk'),
  debug = require('debug')('crowley:src:aws')

exports.getId = () => {
  const iam = new AWS.IAM()

  let authorized = data => data.User.Arn
  let unauthorized = error => error.message
  let match = arn => {
    return arn.match(/arn:aws:iam::(\d+):/) ?
      arn.match(/arn:aws:iam::(\d+):/)[1] : arn.match(/arn:aws:sts::(\d+):/)[1]
  }

  return
  data = await iam.getUser()

  return iam.getUser({}).promise
}
