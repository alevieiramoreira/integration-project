
exports.up = function(knex) {
  return knex.schema.createTable('customers', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('surname').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('customers');
};
