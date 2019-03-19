'use strict';

exports.up = async (Knex) => {
  return await Knex.raw('UPDATE movies SET name = title');
};

exports.down = async (Knex) => {
  return await Promise.resolve();
};
