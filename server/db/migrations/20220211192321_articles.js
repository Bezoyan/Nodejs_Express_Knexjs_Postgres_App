/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('articles', function (table) {
        table.increments('id').primary()
        table.string('heading', 255).notNullable().defaultTo('Untitled article')
        table.string('content', 10000).notNullable()
        table.timestamp('created_at').nullable().defaultTo(knex.fn.now())
        table.timestamp('updated_at').nullable().defaultTo(knex.fn.now())
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('articles');
};
