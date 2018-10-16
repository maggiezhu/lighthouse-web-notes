const settings = require("./settings");
var pg = require('knex')({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});

let firstName = process.argv[2];
let lastName = process.argv[3];
let date = process.argv[4];
console.log(firstName,lastName,date);
// var currentid;
// let allid = pg.select('id').from('famous_people').then(function(results){
//   currentid = parseInt(results.length);
//   console.log(currentid+1);
// });

let new_row = {first_name:firstName, last_name:lastName, birthdate:date};

pg('famous_people')
.insert(new_row).into('famous_people').then(function(){
  console.log('inserted new people!');
}).finally(function(){
  pg.select('*').from('famous_people').then(function(results){console.log(results);})
  pg.destroy();
})