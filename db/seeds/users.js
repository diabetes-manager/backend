
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { "id":1, "username":"Patient Zero", "bg_high":7, "bg_low":3 },
        { "id":2, "username":"Patient One", "bg_high":6, "bg_low":4 },
      ]);
    });
};
