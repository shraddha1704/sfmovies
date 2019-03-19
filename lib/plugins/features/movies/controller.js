'use strict';

const Movie = require('../../../models/movie');

exports.create = async (payload) => {
  const tempPayload = Object.assign({}, payload);
  tempPayload.name = tempPayload.title;
  delete tempPayload.title;
  const movie = await new Movie().save(tempPayload);

  return new Movie({ id: movie.id }).fetch();
};
