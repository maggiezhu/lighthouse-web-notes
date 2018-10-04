var express = require("express");
var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
var cookieParser = require('cookie-parser')
app.use(cookieParser())
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
  let templateVars = {urls:urlDatabase}
  console.log(request.headers);
  console.log('in get /urls', request.cookies==={});
  // if(request.cookies.username){
  //   console.log('in get /urls, username exist');
  //   templateVars.username =request.cookies.username}
  //   console.log('in get /urls, username NOT exist');
  // response.render("urls_index", templateVars);
});

app.get('/urls/new',(request,response)=>{
  templateVars = {username:request.cookies.username}
  response.render('urls_new',templateVars);
});

//handle POST request from /login
app.post('/login',(request,response)=>{
  let username = request.body.username;
  response.cookie('username', username);
  response.redirect('/urls');
})

//Delete shorturl
app.post('/urls/:id/delete', (request,response)=>{
  delete urlDatabase[request.params.id];
  response.redirect('/urls');
})


//Edit a longurl
app.post('/urls/:id',(request,response)=>{
    console.log('in the psot server for urls/:id')
    urlDatabase[request.params.id]= request.body.newlongURL;
    response.redirect('/urls');

})

app.post('/urls',(request, response)=>{
  let shorturl = generateRandomString();
  urlDatabase[shorturl] = request.body.longURL;
  response.redirect(`http://localhost:8080/urls/${shorturl}`);
});


app.get('/urls/:id',(request, response)=>{

  let templateVars = { shorturl: request.params.id,
  longurl : urlDatabase[request.params.id],
  username:request.cookies.username};
  response.render('urls_show',templateVars); //send input url to template
  console.log(templateVars)
});

app.get("/u/:shortURL", (request, response) => {
  // let longURL = ...
  let shorturl = request.params.shortURL;
  let longurl = urlDatabase[shorturl];
  response.redirect(longurl);
});




app.listen(PORT);
console.log('8080 is the port');




