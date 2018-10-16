
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('milstones',function(table){
        table.increments('id').primary();
        table.string('description');
        table.date('date_achieved');
      })
    ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('milstones')
    ])
};
