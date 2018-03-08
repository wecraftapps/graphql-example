exports.seed = (knex, Promise) => {
  return knex('authors').del()
  .then(() => {
    return knex('authors').insert({
      author_id: 'e7691735-6e7c-495e-a422-a001824893e6',
      first_name: 'Jean',
      last_name: 'Hervé',
    });
  })
  .then(() => {
    return knex('authors').insert({
      author_id: '7295d773-5eed-44cf-8b65-dc5d65995cf1',
      first_name: 'Sigmun',
      last_name: 'Freud',
    });
  })
  .then(() => {
    return knex('authors').insert({
      author_id: 'c470d114-4f74-4250-ad40-d510b2a1a5f4',
      first_name: 'Catherine',
      last_name: 'De Medicis',
    });
  })
  .then(() => {
    return knex('authors').insert({
      author_id: '830945ce-f48d-4c8d-a483-311511d480b0',
      first_name: 'Rose',
      last_name: 'Dawson',
    });
  });
};
