
exports.up = function(knex) {
    return knex.schema.createTable('insulin', tbl => {
        tbl.increments();

        tbl.timestamp('timestamp').defaultTo(knex.fn.now());

        tbl.float('amount').notNullable();
        
        tbl.integer('duration')

        tbl.string('type', 255).notNullable();

        tbl.string('brand', 255).notNullable();

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
    return knex.schema.dropTableIfExists('insulin');
};

