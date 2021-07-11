const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  from: { type: String, required: true },
  to: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  date: { type: Date, dafault: Date.now },
  clicks: {},
})

module.exports = model('User', schema)
