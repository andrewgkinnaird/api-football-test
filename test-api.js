require('dotenv').config();
var unirest = require("unirest");
var express = require('express');
var app = new express();

var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/leagues");

req.headers({
	"x-rapidapi-key": process.env.API_FOOTBALL_KEY,
	"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

    let leagues = res.body.api.leagues;
    leagues.forEach(element => {
        if(element.country === "Japan" && element.season == 2020){
            console.log(element.name + element.league_id);
        }
    });
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`)
})