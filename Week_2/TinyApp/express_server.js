var express = require("express");
var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
var cookieParser = require('cookie-parser');
app.use(cookieParser());
// var cookieSession = require('cookie-session');
// app.use(cookieSession({
//   name: 'session',
//   keys: ['key1', 'key2'],
//   // Cookie Options
//   maxAge: 60 * 1000 // 1minute
// }))

var PORT = 8080;
app.set("view engine", "ejs");

var urlDatabase = {
  "b2xVn2": {userID:'userID1',longurl:"http://www.lighthouselabs.ca"},
  "9sm5xK": {userID:'userID2',longurl:"http://www.lighthouselabs.ca"}
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


//handel GET /urls/new
app.get('/urls/new',(request,response)=>{
  //if not logged in, redirect to login page
  let cookieuserID = request.cookies.user_id;
  console.log('in get urls/new!',cookieuserID);
  if(cookieuserID === undefined){
    console.log('in urls/new GET, no user_id')
    response.redirect('/login');
  }
  //if logged in, user can add longURL
  else{
    console.log('theres user_id, gonna go user_new template')
    let templateVars = {user_id:request.cookies.user_id};
    response.render('urls_new',templateVars);
  }

})

//handel GET /urls
//generate the page with all the urls in url database, render /urls_show, need{user_id, urls}
app.get('/urls',(request,response)=>{

    let cookieUser_id=request.cookies.user_id;
    if(cookieUser_id === undefined){
      //user not logged in, direct to login page
      response.render('./partials/_header', user_id = cookieUser_id);
    }else{
    //render the index page with user_id in variable
      let currentUserUrls=generateUserUrl(request.cookies.user_id);//a array of object
                                                                 //shorturl:{userID:,longurl}

      let templateVars = {currentUserUrls:currentUserUrls, user_id:cookieUser_id};

      console.log('in Get /urls, rendering urls_index',templateVars);
      response.render("urls_index", templateVars);
  }
})

  function generateUserUrl(user_id){//the result looks the same as url database,but only for one user
    let urlObjs = [];
    let tempObj = {};
    for(obj in urlDatabase){
      if(urlDatabase[obj].userID === user_id){
        urlObjs[obj] = urlDatabase[obj];
      }
    }
    return urlObjs;
  }


//handle POST request from /login
app.post('/login',(request,response)=>{
  //check this user is in the user database
  let currentUser={};
  for(var user in users){
    if(request.body.email === users[user].email){
      console.log('checking if the user exist in the database for login');
      currentUser = users[user];
    }
  }
  if(currentUser){
    //user exist, check password
    if(request.body.password === currentUser.password){
      response.cookie('user_id',currentUser.id);
      response.redirect('/urls');
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
  //check if the user_id from cookie match the url's user_id
  if(request.cookies.user_id === urlDatabase[request.params.id].userID){
    delete urlDatabase[request.params.id];
    response.redirect('/urls');
  }else{
    response.redirect('/login');
  }
})





//should take long url, generate shorturl, add to url database with user id
app.post('/urls',(request, response)=>{
  let shorturl = generateRandomString();
  urlDatabase[shorturl] = {userID:request.cookies.user_id,longurl:request.body.longURL};
  console.log('in post /urls',urlDatabase);
    response.redirect('/urls');
  // response.redirect(`http://localhost:8080/urls/${shorturl}`);
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
  response.redirect('/urls');
  console.log('adding new user to database',userRandomID);
})


//redirect user input short url to corresponding longurl page
app.get('/urls/:id',(request, response)=>{

  let templateVars = { shorturl: request.params.id,
  users : users,
  user_id:request.cookies.user_id};
  console.log('in urls/alink, rendering urls show');
  response.render('urls_show',templateVars); //send input url to template

});

//find given shorturl's according longurl in database, redirect to longurl page

app.post('/urls/:id',(request,response)=>{
    let longurl = urlDatabase[request.params.id].longurl;
    response.redirect(longurl);
    // urlDatabase[request.params.id]= request.body.newlongURL;
    // console.log(urlDatabase);
    // response.redirect('/urls');
})

app.get("/u/:shortURL", (request, response) => {
  // let longURL = ...
  let shorturl = request.params.shortURL;
  let longurl = urlDatabase[shorturl];
  response.redirect(longurl);
});




app.listen(PORT);
console.log('8080 is the port');




