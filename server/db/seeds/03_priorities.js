
exports.seed = function(knex, Promise) {
  return knex('priorities').del()
    .then(function () {
      return knex('priorities').insert([
        {id: 1, name: 'Low', rank: 1},
        {id: 2, name: 'Med', rank: 2},
        {id: 3, name: 'High', rank: 3}
      ]);
    });
};
