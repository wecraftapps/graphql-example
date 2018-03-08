exports.up = (knex, Promise) => Promise.all([
  knex.schema.raw(`
    CREATE TABLE authors (
      author_id UUID PRIMARY KEY,
      first_name VARCHAR(128),
      last_name VARCHAR(128)
    );
  `),
]);

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('authors');
};
