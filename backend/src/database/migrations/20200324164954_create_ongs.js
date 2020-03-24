
exports.up = function(knex) {
    // o que eu quero que seja feito
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); // estado
    });
};

exports.down = function(knex) {
    // o que fazer se o "up" der errado
    return knex.schema.dropTableIfExists('ongs');
};
