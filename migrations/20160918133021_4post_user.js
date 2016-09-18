
exports.up = function(knex, Promise) {
  return knex.schema.createTable('post_user', (table) => {
    table.increments();
    table.string('author_id')
      .references('uid')
      .inTable('user');
    table.string('post_id')
      .references('postid')
      .inTable('post');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('post_user');
};
