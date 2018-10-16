const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});
let name = process.argv[2];
console.log(name);

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }

    look_up_people(name);


});




function look_up_people(name){
  client.query(`select id, first_name,birthdate::varchar from famous_people where first_name = $1::text`,[name],function(error, results){
      for(i of results.rows){
        let log = `-${i.id}:${i.first_name}, burn ${i.birthdate}`
        console.log(log);
      }



      client.end();
  })
  console.log('in function lookuppeople');

}

