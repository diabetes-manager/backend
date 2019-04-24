
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { "id":1, "username":"Patient Zero", "password":"$2a$10$IAM99BadDref6SXdi0Iple.buMoZxmpz1BJPnod1lTrbYOBGmOhwq", "bg_high":7, "bg_low":3 },
        { "id":2, "username":"Patient One", "password":"$2a$10$IAM99BadDref6SXdi0Iple.buMoZxmpz1BJPnod1lTrbYOBGmOhwq", "bg_high":6, "bg_low":4 },
      ]);
    });
};
