
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table) => {
    table.increments('uid').primary();
    table.string('username');
    table.string('password');
    table.string('name');
    table.string('email');
    table.string('photo');
    table.timestamp();

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
