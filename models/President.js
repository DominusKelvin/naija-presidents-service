var mongoose = require('mongoose')

const PresidentSchema = new mongoose.Schema({
  name: {type: String, required: [true, "name can't be blank"]}
  // TODO: Hope complete the schema
})