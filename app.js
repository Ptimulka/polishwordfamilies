var express = require("express");
var app = express();

var dict = require("./assets/searchDict.json");

function searchWord(word) {
    var ret = [];

    for(var i=word.length; i>0; i=i-1) {

      let prefix = word.substring(0,i);
      let suffix = word.substring(i);

      let arrOfArrs = dict[prefix];
      if(typeof arrOfArrs != 'undefined') {
        arrOfArrs.forEach(arr => {
          if(arr.includes(suffix)) {
            let resItem = { prefix: prefix, suffices: arr };
            ret.push(resItem);
          }
        });
      }
    }
    if(ret.length == 0)
      return [{ prefix: word, suffices: [""] }];
    else {
      return ret;
    }
  }

app.get("/wordfamilies/:word", (req, res, next) => {
    let word = req.params.word.toLowerCase();
    let ret = searchWord(word);
    res.json({ word: word, families: ret });
});

app.use(function(req, res) {
  res.status(404).json({ error: "404: Page not Found"});
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});