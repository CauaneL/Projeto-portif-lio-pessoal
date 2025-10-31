const crmService = require('../services/crm.service');

exports.extract = (req, res) => {
  try {
    const clientes = crmService.extract();
    res.status(200).json({ clientes });
  } catch (error) {
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
};

exports.import = (req, res) => {
  try {
    const result = crmService.import(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
};