exports.up = function(knex) {
    let createQuery = `CREATE TABLE diabetes2(
        id SERIAL PRIMARY KEY NOT NULL,
        message TEXT,
        created_at TIMESTAMP
    )`
    return knex.raw(createQuery)
}
  
  exports.down = function(knex) {
    let dropQuery = `DROP TABLE diabetes2`
    return knex.raw(dropQuery)
}