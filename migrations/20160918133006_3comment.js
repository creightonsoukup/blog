
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comment', (table) => {
    table.increments('commentid').primary();
    table.string('body');
    table.string('author_id')
      .references('uid')
      .inTable('user');
    table.string('post_id')
      .references('postid')
      .inTable('post');
    table.dateTime('postDate');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comment');
};
