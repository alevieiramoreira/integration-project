const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async index(request, response) {
    const vendors = await connection('vendors').select('*');

    return response.json(vendors);
  },

  async create(request, response) {
    const { 
      name, 
      CPF_CNPJ, 
      email, 
      password, 
      whatsapp, 
      CEP, 
      address, 
      neighbourhood, 
      city, 
      state 
    } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('vendors').insert({
      id,
      name, 
      CPF_CNPJ, 
      email, 
      password, 
      whatsapp, 
      CEP, 
      address, 
      neighbourhood, 
      city, 
      state 
    })

    return response.json({ id });
  },
  
  async update(request, response) {
    const { 
      name,  
      email, 
      password, 
      whatsapp, 
      instagram,
      facebook,
      twitter 
    } = request.body;

    const { id } = request.params;

    const vendor = await connection('vendors')
      .where('id', id)
      .select('name')
      .first();

      if(!vendor) {
        return response.status(401).json({ error: 'Erro ao aplicar as edições. Tente novamente.' })
      }

      await connection('vendors').where('id', id).update({
        name, 
        email, 
        password, 
        whatsapp, 
        instagram,
        facebook,
        twitter
      });

      return response.status(204).send();
  }

}