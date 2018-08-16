
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', table => {
    table.increments();
    table.string('title', 255).notNullable();
    table.string('body', 1024).notNullable();
    table.integer('priority_id').notNullable().references('priorities.rank');
    table.integer('status_id').notNullable().references('statuses.rank');
    table.integer('created_by').notNullable().references('users.id');
    table.integer('assigned_to').references('users.id');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
