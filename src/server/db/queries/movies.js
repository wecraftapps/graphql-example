const knex = require('../connection');

function getAuthors(filters) {
  return knex('authors')
  .select('*')
  .where(filters);
}

function getComments(filters) {
  return knex('comments')
  .select('*')
  .where(filters);
}

function getMovies(filters) {
  return knex('movies')
  .select('*')
  .where(filters);
}

function addMovie(movie) {
  return knex('movies')
  .insert({
    movie_id: movie.movie_id,
    name: movie.name,
    genre: movie.genre || 'Iconnu',
    rating: movie.rating || 0,
    explicit: movie.explicit || false,
    comments: movie.comments || [],
  })
  .returning('*');
}

function addComment(comment) {
  return knex('comments')
  .insert({
    comment_id: comment.comment_id,
    content: comment.content || '',
    author: comment.author,
  })
  .returning('*');
}

function addAuthor(author) {
  return knex('authors')
  .insert({
    author_id: author.author_id,
    first_name: author.first_name || '',
    last_name: author.last_name || '',
  })
  .returning('*');
}

function updateMovie(movie) {
  const tmpMovie = {};

  if(movie.name) tmpMovie.name = movie.name;
  if(movie.genre) tmpMovie.genre = movie.genre;
  if(movie.rating) tmpMovie.rating = movie.rating;
  if(movie.explicit) tmpMovie.explicit = movie.explicit;
  if(movie.comments) tmpMovie.comments = movie.comments;

  return knex('movies')
  .where('movie_id', movie.movie_id)
  .update(tmpMovie)
  .returning('*');
}

function updateComment(comment) {
  const tmpComment = {};

  if(comment.content) tmpComment.content = comment.content;
  if(comment.author) tmpComment.author = comment.author;

  return knex('comments')
  .where('comment_id', comment.comment_id)
  .update(tmpComment)
  .returning('*');
}

function updateAuthor(author) {
  const tmpAuthor = {};

  if(author.first_name) tmpAuthor.first_name = author.first_name;
  if(author.last_name) tmpAuthor.last_name = author.last_name;

  return knex('authors')
  .where('author_id', author.author_id)
  .update(tmpAuthor)
  .returning('*');
}

function deleteMovie(movieId) {
  return knex('movies')
  .where('movie_id', movieId.movie_id)
  .del()
  .returning('*');
}

function deleteComment(commentId) {
  return knex('comments')
  .where('comment_id', commentId.comment_id)
  .del()
  .returning('*');
}

function deleteAuthor(authorId) {
  return knex('authors')
  .where('author_id', authorId.author_id)
  .del()
  .returning('*');
}

module.exports = {
  getAuthors,
  getComments,
  getMovies,
  addMovie,
  addComment,
  addAuthor,
  updateMovie,
  updateComment,
  updateAuthor,
  deleteMovie,
  deleteComment,
  deleteAuthor
};
