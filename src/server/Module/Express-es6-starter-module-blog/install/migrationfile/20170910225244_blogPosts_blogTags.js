exports.up = function(knex, Promise) {
   return knex.schema
        .createTable('blogPosts_blogTags', function(table) {
            table.increments('id').primary();
            table.integer('users').unsigned();
            table.integer('blogPost_id').unsigned();
            table.integer('blogTag_id').unsigned();
            table.timestamps();

            table.foreign('users')
                .references('users.id')
                .onDelete('cascade')
                .onUpdate('cascade');

            table.foreign('blogPost_id')
                .references('blogPosts.id')
                .onDelete('cascade')
                .onUpdate('cascade');
            
            table.foreign('blogTag_id')
                .references('blogTags.id')
                .onDelete('cascade')
                .onUpdate('cascade');


        });
};

exports.down = function(knex, Promise) {
     return knex.schema
        .dropTable('blogPosts_blogTags')
};

