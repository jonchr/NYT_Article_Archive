const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema for NYT articles
const articleSchema = new Schema({
  title: { type: String, required: true },
  author: String,
  date: { type: Date, default: Date.now },
  snippet: String,
  url: String
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
