const crmService = require('../services/crm.service');
const logs = require('../models/logs.model');

exports.extract = (req, res) => {
  const start = Date.now();
  try {
    // Simulação de indisponibilidade do CRM
    if (process.env.CRM_OFFLINE === 'true') {
      logs.add({
        usuario: req.user.username,
        endpoint: '/crm/extract',
        timestamp: new Date().toISOString(),
        quantidade: 0,
        duracao: Date.now() - start,
        status: 'erro',
        erro: 'CRM indisponível'
      });
      return res.status(503).json({ message: 'Serviço CRM indisponível' });
    }
    const clientes = crmService.extract();
    logs.add({
      usuario: req.user.username,
      endpoint: '/crm/extract',
      timestamp: new Date().toISOString(),
      quantidade: clientes.length,
      duracao: Date.now() - start,
      status: 'sucesso'
    });
    res.status(200).json({ clientes });
  } catch (error) {
    logs.add({
      usuario: req.user.username,
      endpoint: '/crm/extract',
      timestamp: new Date().toISOString(),
      quantidade: 0,
      duracao: Date.now() - start,
      status: 'erro',
      erro: error.message
    });
  res.status(400).json({ message: 'Erro na requisição' });
  }
};

exports.import = (req, res) => {
  try {
    const result = crmService.import(req.body);
    res.status(201).json(result);
  } catch (error) {
  res.status(400).json({ message: 'Erro na requisição' });
  }
};