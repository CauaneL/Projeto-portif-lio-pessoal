const logs = require('../models/logs.model');

exports.getLogs = (req, res) => {
  const { usuario, endpoint, status, inicio, fim } = req.query;
  const filtro = { usuario, endpoint, status, inicio, fim };
  const resultado = logs.getAll(filtro);
  // Logar consulta de auditoria
  logs.add({
    usuario: req.user.username,
    endpoint: '/auditoria/logs',
    timestamp: new Date().toISOString(),
    status: 'consulta',
    parametros: filtro
  });
  res.status(200).json({ logs: resultado });
};
