// NYTimes API Key
// var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931"
var Article = require('./models/Article')

module.exports= function(router) {
    // render home page
    router.get("/", function(req, res) {
        res.sendFile(__dirname + "/public/index.html")
    });
    // search mongo for saved articles and display them
    router.get("/api/saved", function(req, res) {
        Article.find({saved:true}).sort({id: -1})
          .exec(function(err, dob) {
            res.json(doc)
          })
    });
    // add articles to saved list
    router.post("/api/saved", function(req, res) {
        Article.insert({
            title: req.body.title,
            date: req.body.date,
            url: req.body.web_url
        })
    });
    // remove article from 
}