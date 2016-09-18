
exports.up = function(knex, Promise) {
  return knex.schema.createTable('media', (table) => {
    table.increments('mediaId').primary();
    table.string('title');
    table.string('author')
    table.string('postid')
      .references('postid')
      .inTable('post');
    table.string('path');
    table.dateTime('postDate');
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('media');
};
