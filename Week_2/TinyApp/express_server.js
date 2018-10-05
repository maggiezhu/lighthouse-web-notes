var express = require("express");
var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
var cookieParser = require('cookie-parser')
app.use(cookieParser())
var PORT = 8080;
app.set("view engine", "ejs");

var urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

const users = {
  "userRandomID": {
    id: "userRandomID",
    email: "user@example.com",
    password: "purple-monkey-dinosaur"
  },
 "user2RandomID": {
    id: "user2RandomID",
    email: "user2@example.com",
    password: "dishwasher-funk"
  }
}

function generateRandomString(){
  return Math.random().toString(36).replace('0.','').slice(0,6);
}



//handel GET /urls
app.get('/urls',(request,response)=>{
    let templateVars = {urls:urlDatabase, user_id : request.cookies.user_id}
    if(request.cookies.user_id === undefined){
      //user not logined, direct to login page?
      response.render("urls_index", templateVars);

  }else{//render the index page with user_id in variable
      templateVars.user = users[request.cookies.user_id];
      response.render("urls_index", templateVars);
  }
})


//handle POST request from /login
app.post('/login',(request,response)=>{

  let currentUser={};
  for(var user in users){
    if(request.body.email === users[user].email){
      currentUser = users[user];
    }
  }
  if(currentUser){
    //user exist, check password
    if(request.body.password === currentUser.password){
      response.cookie('user_id',currentUser.id);
      response.redirect('/');
    }else{
      //wrong password
      response.status(403).end();
    }

  }else{
    //user not exist in users database
    response.status(403).end();
  }
})

//handel GET /login
app.get('/login',(request,response)=>{
  response.render('login_page');
})


// handle POST request from /logout
app.post('/logout',(request, response)=>{
  response.clearCookie('user_id');
  response.redirect('/urls');
})

//Delete shorturl
app.post('/urls/:id/delete', (request,response)=>{
  delete urlDatabase[request.params.id];
  response.redirect('/urls');
})


//Edit a longurl
app.post('/urls/:id',(request,response)=>{

    urlDatabase[request.params.id]= request.body.newlongURL;
    response.redirect('/urls');
})

app.post('/urls',(request, response)=>{
  let shorturl = generateRandomString();
  urlDatabase[shorturl] = request.body.longURL;
  response.redirect(`http://localhost:8080/urls/${shorturl}`);
});

//handel GET /register
app.get('/register',(reqeust,response)=>{
  response.render('register_page');
})

//handel POST /register -> add user to db and cookie, go to /url
app.post('/register',(request,response)=>{
  let useremail = request.body.email;
  let userpassword = request.body.password;
  let userRandomID = generateRandomString();
  //check empty email or password
  if(useremail==='' || userpassword == ''){
    response.status(400).end();
  }
  //check useremail already exist
  for(let user in users){
    if(users[user].email === useremail){
      response.status(400).end();
    }
  }
  //store new valid user info
  users[userRandomID] = {id: userRandomID,
  email: useremail,
  password: userpassword};
  response.cookie('user_id', userRandomID);
  console.log('In register, add user_id to db and cookies ');
  response.redirect('/urls');
  console.log(users);

})

app.get('/urls/:id',(request, response)=>{

  let templateVars = { shorturl: request.params.id,
  users : users,
  user_id:request.cookies.user_id};
  response.render('urls_show',templateVars); //send input url to template

});

app.get("/u/:shortURL", (request, response) => {
  // let longURL = ...
  let shorturl = request.params.shortURL;
  let longurl = urlDatabase[shorturl];
  response.redirect(longurl);
});




app.listen(PORT);
console.log('8080 is the port');




