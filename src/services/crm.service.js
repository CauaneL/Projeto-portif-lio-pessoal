const clientesModel = require('../models/clientes.model');

exports.extract = () => {
  return clientesModel.getPublic();
};

exports.import = (updates) => {
  return clientesModel.updateStatuses(updates);
};