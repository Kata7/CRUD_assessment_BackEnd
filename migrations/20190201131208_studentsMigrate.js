
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', (table) => {
    table.increments();
    table.string('name');
    table.decimal('GPA', 3, 2);
  })
  
};

exports.down = function(knex, Promise) {
  
};
