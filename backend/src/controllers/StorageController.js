const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const vendor_id = request.headers.authorization;
    const products = await connection('products')
      .where('vendor_id', vendor_id)
      .select('*');

    return response.json(products);
  },
}