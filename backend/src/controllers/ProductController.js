const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const products = await connection('products').select('*');

    return response.json(products);
  },

  async create(request, response) {
    const { name, value, description, quantity, url_image } = request.body;
    const vendor_id = request.headers.authorization;

    const [id] = await connection('products').insert({
      name, 
      value, 
      description, 
      quantity, 
      url_image, 
      vendor_id
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const vendor_id = request.headers.authorization;

    const product = await connection('products')
      .where('id', id)
      .select('vendor_id')
      .first();

      if(product.vendor_id !== vendor_id) {
        return response.status(401).json({ error: 'Operação não permitida.' })
      }

      await connection('products').where('id', id).delete();

      return response.status(204).send();
  },

  async update(request, response) {
    const { id } = request.params;
    const { name, value, description, quantity, url_image } = request.body;
    const vendor_id = request.headers.authorization;

    const product = await connection('products')
      .where('id', id)
      .select('vendor_id')
      .first();

      if(product.vendor_id !== vendor_id) {
        return response.status(401).json({ error: 'Operação não permitida.' })
      }

      await connection('products').where('id', id).update({
        name, 
        value, 
        description, 
        quantity, 
        url_image
      });

      return response.status(204).send();
  }
}