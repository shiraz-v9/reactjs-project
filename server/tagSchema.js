const mongoose = require("mongoose");
const { Schema } = mongoose;

const htmlSchema = new Schema({
  tagName: String,
  tagDescription: String,
  tagExample: String,
});

const html = mongoose.model("tags", htmlSchema);
module.exports = html;
