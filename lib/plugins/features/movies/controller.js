'use strict';

const Movie = require('../../../models/movie');

exports.create = async (payload) => {
  const tempPayload = Object.assign({}, payload);
  tempPayload.name = tempPayload.title;
  Reflect.deleteProperty(tempPayload, 'title');

  return await new Movie().save(tempPayload);
};
