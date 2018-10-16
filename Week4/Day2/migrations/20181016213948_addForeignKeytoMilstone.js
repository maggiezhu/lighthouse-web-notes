
exports.up = function(knex, Promise) {
   return Promise.all([
    knex.schema.table('milstones', function(table){
      table.integer('famous_person_id').unsigned().notNullable();
      table.foreign('famous_person_id').references('famous_people.id');
    })
  ])
};

exports.down = function(knex, Promise) {

};
