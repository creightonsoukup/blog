
exports.up = function(knex, Promise) {
  return knex.schema.createTable('post', (table) => {
    table.increments('postid').primary();
    table.string('title');
    table.string('author_id')
      .references('uid')
      .inTable('user');
    table.string('body');
    table.dateTime('postDate');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('post');
};
