'use strict';

exports.up = async (Knex) => {
  await Knex.raw('UPDATE movies SET name = title');
};

exports.down = async (Promise) => {
  return await Promise.resolve();
};
