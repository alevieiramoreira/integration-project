const connection = require('../database/connection');

module.exports = {
  async loginCustomer(request, response) {
    const { email, password } = request.body;

    const customer = await connection('customers')
      .where({ email: email, password: password })
      .select('name')
      .first();

    if(!customer) {
      return response.status(400).json({ error: 'Email ou senha incorretos' });
    }

    return response.json(customer);
  },

  async loginVendor(request, response) {
    const { email, password } = request.body;

    const vendor = await connection('vendors')
      .where({ email: email, password: password })
      .select('name')
      .first();

    if(!vendor) {
      return response.status(400).json({ error: 'Email ou senha incorretos' });
    }

    return response.json(vendor);
  }

}