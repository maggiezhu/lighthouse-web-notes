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

let name = process.argv[2];

pg.from('famous_people')
.select('id', 'first_name', 'birthdate')
.where('first_name','=',`${name}`)
.then(function(results){
  for(i of results){
        let log = `-${i.id}:${i.first_name}, burn ${i.birthdate.toDateString()}`
        console.log(log);
      }
} )
.finally(function(){pg.destroy()})


