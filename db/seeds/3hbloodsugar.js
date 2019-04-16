
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bloodsugar').del()
    .then(function () {
      // Inserts seed entries
      return knex('bloodsugar').insert([
        {"id":1,"timestamp":"2019-02-01T05:32:46Z","measurment":104},
        {"id":2,"timestamp":"2019-02-01T02:04:52Z","measurment":111},
        {"id":3,"timestamp":"2019-02-01T03:49:53Z","measurment":113},
        {"id":4,"timestamp":"2019-02-01T03:32:35Z","measurment":114},
        {"id":5,"timestamp":"2019-02-01T00:00:21Z","measurment":107},
        {"id":6,"timestamp":"2019-02-01T00:24:51Z","measurment":111},
        {"id":7,"timestamp":"2019-02-01T10:20:38Z","measurment":110},
        {"id":8,"timestamp":"2019-02-01T05:54:37Z","measurment":114},
        {"id":9,"timestamp":"2019-02-01T04:31:07Z","measurment":120},
        {"id":10,"timestamp":"2019-02-01T06:57:07Z","measurment":104},
        {"id":11,"timestamp":"2019-02-01T07:49:56Z","measurment":107},
        {"id":12,"timestamp":"2019-02-01T09:50:29Z","measurment":102},
        {"id":13,"timestamp":"2019-02-01T05:25:23Z","measurment":105},
        {"id":14,"timestamp":"2019-02-01T04:29:24Z","measurment":125},
        {"id":15,"timestamp":"2019-02-01T07:17:24Z","measurment":107},
        {"id":16,"timestamp":"2019-02-01T10:24:32Z","measurment":117},
        {"id":17,"timestamp":"2019-02-01T05:28:27Z","measurment":113},
        {"id":18,"timestamp":"2019-02-01T01:20:14Z","measurment":108}
      ]);
    });
};
