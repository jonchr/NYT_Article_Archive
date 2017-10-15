const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytlist",
  {
    useMongoClient: true
  }
);

const articlesSeed = [
  {
    "_id" : ObjectId("59d2fac38851f52b495c7f2c"),
    "title" : "Review: Revisiting a Throbbing Classic of Electronic Music",
    "author" : "Anthony Tommasini",
    "date" : "2017-07-21T21:02:25+0000",
    "snippet" : "The Lincoln Center Festival presented a transformed live-performance version of Morton Subotnick’s classic 1967 recording, “Silver Apples of the Moon.”",
    "url" : "https://www.nytimes.com/2017/07/21/arts/music/review-morton-subotnick-silver-apples-of-the-moon-lincoln-center-festival.html"
  }, {
    "_id" : ObjectId("59d2fac38851f52b495c7f2e"),
    "title" : "The Apples of New York",
    "author" : null,
    "date" : "2017-06-16T19:07:00+0000",
    "snippet" : "A reader writes about the decades of experimentation done by Cornell University.",
    "url" : "https://www.nytimes.com/2017/06/16/opinion/the-apples-of-new-york.html"
  }, {
    "_id" : ObjectId("59d2fac38851f52b495c7f2f"),
    "title" : "The Electronic Music That Tom Wolfe and the Kennedys Frugged To",
    "author" : "William Robin",
    "date" : "2017-07-13T19:50:07+0000",
    "snippet" : "Morton Subotnick’s seminal “Silver Apples of the Moon” will be celebrated with 50th-anniversary performances at the Lincoln Center Festival.",
    "url" : "https://www.nytimes.com/2017/07/13/arts/music/morton-subotnick-the-electronic-music-that-tom-wolfe-and-the-kennedys-frugged-to.html"
  }, {
    "_id" : ObjectId("59d2fac38851f52b495c7f30"),
    "title" : "Hunting Down the Lost Apples of the Pacific Northwest",
    "author" : "Kirk Johnson",
    "date" : "2017-05-29T22:01:14+0000",
    "snippet" : "A retired F.B.I. investigator is digging into records and rediscovering old varieties in trees left stranded when family orchards failed in the 1800s.",
    "url" : "https://www.nytimes.com/2017/05/29/us/apple-varieties-pacific-northwest.html"
  }, {
    "_id" : ObjectId("59e0ee952e95a75c6b8d25ac"),
    "title" : "Pirogi From ‘the Great Comet of 1812’ Hit the Lower East Side",
    "author" : "Florence Fabricant",
    "date" : "2017-09-18T17:25:07+0000",
    "snippet" : "The producers of the closed Broadway musical will open Samovarchik, the foods of the samurai and more news.",
    "url" : "https://www.nytimes.com/2017/09/18/dining/pierogi-samovarchik-easy-fermenter.html"
  }, {
    "_id" : ObjectId("59e105155b9f5d7d3c6e050f"),
    "title" : "Apple Butter",
    "author" : "Alison Roman",
    "snippet" : "A great answer to that eternal question — “What do I do with all these apples?” — apple butter is a sweetened, concentrated, lightly spiced spread that’s smoother than jam and thicker than applesauce and fantastic on buttered toast, thinned with v...",
    "url" : "https://cooking.nytimes.com/recipes/1018949-apple-butter",
    "date" : ISODate("2017-09-26T04:00:00.000Z"),
    "__v" : 0
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articlesSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
