
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, first_name: 'kenny', last_name: 'chung', email: 'email@gmail.com'},
        {id: 2, first_name: 'some', last_name: 'guy', email: 'someguy@gmail.com'},
        {id: 3, first_name: 'who', last_name: 'dis', email: 'whodis@gmail.com'}
      ]);
    });
};
