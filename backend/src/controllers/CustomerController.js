const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async index(request, response) {
    const customers = await connection('customers').select('*');

    return response.json(customers);
  },

  async create(request, response) {
    const { name, surname, email, password } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('customers').insert({
      id,
      name,
      surname,
      email,
      password
    })

    return response.json({ id });
  },

  async update(request, response) {
    const { name, surname, email, password } = request.body;

    const { id } = request.params;

    const customer = await connection('customers')
      .where('id', id)
      .select('name')
      .first();

      if(!vendor) {
        return response.status(401).json({ error: 'Erro ao aplicar as edições. Tente novamente.' })
      }

    await connection('customers').where('id', id).update({
      name,
      surname,
      email,
      password
    })
  }

}