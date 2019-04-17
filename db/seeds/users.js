
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { "id":1, "username":"Patient Zero", "bg_high":7, "bg_low":3 },
        { "id":2, "username":"Patient One", "bg_high":6, "bg_low":4 },
      ]);
    });
};
