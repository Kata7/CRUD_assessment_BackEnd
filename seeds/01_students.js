
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, name: 'Anna', gpa: 4.0},
        {id: 2, name: 'Bert', gpa: 3.0},
        {id: 3, name: 'Cathy', gpa: 2.0}
      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('students', (SELECT MAX(id) FROM students))"
      )
    })
};
