
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, name: 'Anna', GPA: 4.0},
        {id: 2, name: 'Bert', GPA: 3.0},
        {id: 3, name: 'Cathy', GPA: 2.0}
      ]);
    });
};
