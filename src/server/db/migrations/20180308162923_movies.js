exports.up = (knex, Promise) => Promise.all([
  knex.schema.raw(`
    CREATE TABLE movies (
      movie_id UUID PRIMARY KEY,
      name VARCHAR(128),
      genre VARCHAR(128),
      rating integer,
      explicit boolean,
      comments UUID ARRAY
    );
  `),
]);

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('movies');
};
