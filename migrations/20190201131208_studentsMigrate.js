
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', (table) => {
    table.increments('id');
    table.string('name').notNullable().defaultsTo('');
    table.decimal('gpa', 3, 2).notNullable().defaultsTo(0.00);
  })
  
};

exports.down = function(knex, Promise) {
  
};
