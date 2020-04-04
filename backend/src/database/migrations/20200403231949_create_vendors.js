
exports.up = function(knex) {
  return knex.schema.createTable('vendors', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('CPF_CNPJ').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('whatsapp').notNullable();

    table.string('CEP').notNullable();
    table.string('address').notNullable();
    table.string('neighbourhood').notNullable();
    table.string('city').notNullable();
    table.string('state', 2).notNullable();

    table.string('instagram').nullable();
    table.string('facebook').nullable();
    table.string('twitter').nullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('vendors');
};
