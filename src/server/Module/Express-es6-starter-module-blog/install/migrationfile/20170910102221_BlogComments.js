
exports.up = function(knex, Promise) {
   return knex.schema
        .createTable('blogComments', function(table) {
            table.increments('id').primary();
            table.integer('users').unsigned();
            table.integer('post').unsigned();
            table.text("body").notNullable()
            table.timestamps();

            table.foreign('users')
                .references('users.id')
                .onDelete('cascade')
                .onUpdate('cascade');

            table.foreign('post')
                .references('blogPosts.id')
                .onDelete('cascade')
                .onUpdate('cascade');

        });
};

exports.down = function(knex, Promise) {
     return knex.schema
        .dropTable('blogComments')
};
