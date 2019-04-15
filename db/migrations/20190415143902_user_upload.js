
exports.up = function(knex) {
    return knex.schema.createTable('user_upload', tbl => {
        tbl.increments();

        tbl.timestamp('timestamp').defaultTo(knex.fn.now());

        tbl.string('object_store', 255).notNullable();

        tbl.string('data_source', 255);

        tbl.string('model', 255);

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
    return knex.schema.dropTableIfExists('user_upload');
};


