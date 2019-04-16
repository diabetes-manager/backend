
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('insulin').del()
    .then(function () {
      // Inserts seed entries
      return knex('insulin').insert([
        {"id":1,"timestamp":"2019-02-01T01:52:54Z","amount":10,"type":"slow acting","brand":"Humalog"},
        {"id":2,"timestamp":"2019-02-01T09:15:18Z","amount":11,"type":"pill form","brand":"Apidra"},
        {"id":3,"timestamp":"2019-02-01T02:41:25Z","amount":18,"type":"pill form","brand":"Apidra"},
        {"id":4,"timestamp":"2019-02-01T11:19:10Z","amount":15,"type":"fast acting","brand":"Novolog"},
        {"id":5,"timestamp":"2019-02-01T04:27:46Z","amount":19,"type":"slow acting","brand":"Humalog"},
        {"id":6,"timestamp":"2019-02-01T05:21:08Z","amount":9,"type":"fast acting","brand":"Apidra"},
        {"id":7,"timestamp":"2019-02-01T08:04:31Z","amount":7,"type":"fast acting","brand":"Humalog"},
        {"id":8,"timestamp":"2019-02-01T04:37:51Z","amount":3,"type":"fast acting","brand":"Apidra"},
        {"id":9,"timestamp":"2019-02-01T00:41:07Z","amount":15,"type":"slow acting","brand":"Novolog"},
        {"id":10,"timestamp":"2019-02-01T08:21:25Z","amount":13,"type":"pill form","brand":"Novolog"},
        {"id":11,"timestamp":"2019-02-01T00:18:48Z","amount":3,"type":"slow acting","brand":"Novolog"},
        {"id":12,"timestamp":"2019-02-01T07:07:27Z","amount":20,"type":"slow acting","brand":"Humalog"},
        {"id":13,"timestamp":"2019-02-01T02:37:52Z","amount":10,"type":"fast acting","brand":"Apidra"},
        {"id":14,"timestamp":"2019-02-01T09:29:06Z","amount":14,"type":"slow acting","brand":"Novolog"},
        {"id":15,"timestamp":"2019-02-01T02:15:26Z","amount":20,"type":"pill form","brand":"Humalog"},
        {"id":16,"timestamp":"2019-02-01T08:10:48Z","amount":16,"type":"slow acting","brand":"Humalog"},
        {"id":17,"timestamp":"2019-02-01T00:54:43Z","amount":14,"type":"fast acting","brand":"Novolog"},
        {"id":18,"timestamp":"2019-02-01T04:39:42Z","amount":17,"type":"fast acting","brand":"Humalog"}
      ]);
    });
};
