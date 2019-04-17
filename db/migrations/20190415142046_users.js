
exports.up = function(knex) {
    return knex.schema.createTable('users', user => {
        user.increments();
        user.string('username', 255).notNullable();

        user.integer('bg_high').notNullable();

        user.integer('bg_low').notNullable();
        
        user.integer('bg_target_top').defaultTo(7);
        
        user.integer('bg_target_bottom').defaultTo(3);
        
        user.integer('height')
        
        user.integer('weight')
        
        user.date('birthdate',255)
        
        user.date('diagnosis_date',255)

        user.string('gender', 255)

        user.string('diabetes_type', 255)

    });
};
  

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};

