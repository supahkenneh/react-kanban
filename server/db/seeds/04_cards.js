
exports.seed = function(knex, Promise) {
  return knex('cards').del()
    .then(function () {
      return knex('cards').insert([
        {id: 1, title: 'feed dog', body: 'feed the dog', created_by: 1, priority_id: 3, status_id: 3, assigned_to: 1},
        {id: 2, title: 'buy groceries', body: 'buy shit', created_by: 2, priority_id: 1, status_id: 1, assigned_to: 2},
        {id: 3, title: 'wash car', body: 'wash shit', created_by: 3, priority_id: 2, status_id: 2, assigned_to: 3}
      ]);
    });
};
