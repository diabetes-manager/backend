
exports.up = function(knex) {
    return knex.schema.createTable('bloodsugar', tbl => {
        tbl.increments();

        tbl.timestamp('timestamp').defaultTo(knex.fn.now());

        tbl.float('measurment').notNullable();

        tbl
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

    });
};
  
exports.down = function(knex) {
    // undo the operation in up
    return knex.schema.dropTableIfExists('bloodsugar');
};
  
