var express = require("express");
var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
var PORT = 8080;

var urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

function generateRandomString(){
  return Math.random().toString(36).replace('0.','').slice(0,6);
}

app.set("view engine", "ejs");

app.get('/urls',(request,response)=>{
  response.render("urls_index", {urls:urlDatabase});
});

app.get('/urls/new',(request,response)=>{
  response.render('urls_new');
});

app.post('/urls',(request, response)=>{
  console.log(request.body);//this is the longurl
  let shorturl = generateRandomString();

  urlDatabase[shorturl] = request.body.longURL;
  response.redirect(`http://localhost:8080/urls/${shorturl}`);
  console.log(urlDatabase);

});

app.get('/urls/:id',(request, response)=>{
  let templateVars = { shortURL: request.params.id };
  response.render('urls_show',templateVars); //send input url to template
  console.log(request.params.id);
});

app.get("/u/:shortURL", (request, response) => {
  // let longURL = ...
  let shorturl = request.params.shortURL;
  let longurl = urlDatabase[shorturl];
  response.redirect(longurl);
});


app.listen(PORT);
console.log('8080 is the port');




