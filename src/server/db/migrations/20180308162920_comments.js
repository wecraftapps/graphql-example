exports.up = (knex, Promise) => Promise.all([
  knex.schema.raw(`
    CREATE TABLE comments (
      comment_id UUID PRIMARY KEY,
      content VARCHAR(128),
      author UUID REFERENCES authors
    );
  `),
]);

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('comments');
};
