const clientesModel = require('../models/clientes.model');

exports.extract = () => {
  return clientesModel.getAll();
};

exports.import = (updates) => {
  return clientesModel.updateStatuses(updates);
};