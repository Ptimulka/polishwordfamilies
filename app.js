var express = require("express");
var cors = require('cors');
var app = express();

const PORT = process.env.PORT || 3000

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

app.use(cors());

app.get("/wordfamilies/:word", (req, res, next) => {    
    let ret = {}
    let param = req.params.word.toLowerCase();
    let words = param.split(',');
    words.forEach(word => { 
        ret[word] = searchWord(word);
    })
    res.json(ret);   
});

app.use(function(req, res) {
  res.status(404).json({ error: "404: Page not Found"});
});

app.listen(PORT, () => {
  console.log(`Listening on ${ PORT }`)
});