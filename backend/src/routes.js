const express = require('express');
const routes = express.Router();

const CustomerController = require('./controllers/CustomerController');
const VendorController = require('./controllers/VendorController');
const ProductController = require('./controllers/ProductController');
const SessionsController = require('./controllers/SessionsController');
const StorageController = require('./controllers/StorageController');

routes.get('/customers', CustomerController.index);
routes.post('/customers', CustomerController.create);
routes.put('/customers/:id', CustomerController.update);

routes.get('/vendors', VendorController.index);
routes.post('/vendors', VendorController.create);
routes.put('/vendors/:id', VendorController.update);

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.create);
routes.delete('/products/:id', ProductController.delete);
routes.put('/products/:id', ProductController.update);

routes.get('/storage', StorageController.index);

routes.post('/sessions/vendor', SessionsController.loginVendor);
routes.post('/sessions/customer', SessionsController.loginCustomer);

module.exports = routes;