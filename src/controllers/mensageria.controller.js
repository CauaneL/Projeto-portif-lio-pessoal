const mensageriaService = require('../services/mensageria.service');

exports.send = async (req, res) => {
  try {
    const result = await mensageriaService.sendMessages(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
};