
exports.seed = function(knex, Promise) {
  return knex('priorities').del()
    .then(function () {
      return knex('priorities').insert([
        {id: 1, name: 'low', rank: '0'},
        {id: 2, name: 'med', rank: '1'},
        {id: 3, name: 'high', rank: '2'}
      ]);
    });
};
