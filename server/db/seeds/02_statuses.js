
exports.seed = function(knex, Promise) {
  return knex('statuses').del()
    .then(function () {
      return knex('statuses').insert([
        {id: 1, name: 'queue', rank: '0'},
        {id: 2, name: 'progress', rank: '1'},
        {id: 3, name: 'done', rank: '2'}
      ]);
    });
};
