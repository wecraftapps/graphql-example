exports.seed = (knex, Promise) => {
  return knex('movies').del()
  .then(() => {
    return knex('movies').insert({
      movie_id: 'f28d887c-1768-407c-8cc4-3c6f43255cb1',
      name: 'The Land Before Time',
      genre: 'Fantasy',
      rating: 7,
      explicit: false,
      comments: ['9097d2f7-9906-4024-b8f4-c4e9e3f3dcaa', 'f3e00877-6e28-4ac9-b5e4-44989ed96374']
    });
  })
  .then(() => {
    return knex('movies').insert({
      movie_id: 'fce71253-5d65-427f-9c7b-efdc1406306a',
      name: 'Jurassic Park',
      genre: 'Science Fiction',
      rating: 9,
      explicit: true,
      comments: ['af7a0669-3ddc-4d6c-9c07-03f983849929']
    });
  })
  .then(() => {
    return knex('movies').insert({
      movie_id: 'e3900bda-92e1-4695-80db-7e7d1df955cb',
      name: 'Ice Age: Dawn of the Dinosaurs',
      genre: 'Action/Romance',
      rating: 5,
      explicit: false,
      comments: ['74dea1b0-7e23-41ad-94a0-2ed21c9af744', '2cbe2637-dfcc-4479-a919-efcf0e79da9c']
    });
  });
};
