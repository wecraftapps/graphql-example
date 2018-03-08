exports.seed = (knex, Promise) => {
  return knex('comments').del()
  .then(() => {
    return knex('comments').insert({
      comment_id: '9097d2f7-9906-4024-b8f4-c4e9e3f3dcaa',
      content: 'Commentaire nul',
      author: 'e7691735-6e7c-495e-a422-a001824893e6',
    });
  })
  .then(() => {
    return knex('comments').insert({
      comment_id: 'af7a0669-3ddc-4d6c-9c07-03f983849929',
      content: 'Commentaire encore plus nul',
      author: 'e7691735-6e7c-495e-a422-a001824893e6',
    });
  })
  .then(() => {
    return knex('comments').insert({
      comment_id: 'f3e00877-6e28-4ac9-b5e4-44989ed96374',
      content: 'Ce film est cool',
      author: 'e7691735-6e7c-495e-a422-a001824893e6',
    });
  })
  .then(() => {
    return knex('comments').insert({
      comment_id: '74dea1b0-7e23-41ad-94a0-2ed21c9af744',
      content: 'Ce film est passable',
      author: '7295d773-5eed-44cf-8b65-dc5d65995cf1',
    });
  })
  .then(() => {
    return knex('comments').insert({
      comment_id: '2cbe2637-dfcc-4479-a919-efcf0e79da9c',
      content: 'Ce film est trop nul',
      author: 'c470d114-4f74-4250-ad40-d510b2a1a5f4',
    });
  });
};
