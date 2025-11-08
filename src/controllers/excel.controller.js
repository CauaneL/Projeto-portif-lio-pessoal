
const { processExcel } = require('../services/excel.service');

exports.upload = async (req, res) => {
  try {
    const clientes = await processExcel(req.file.path);
    res.json({
      mensagem: 'Arquivo processado com sucesso',
      total: clientes.length,
      clientes
    });
  } catch (err) {
    console.error(err);
  res.status(400).json({ erro: 'Falha ao processar Excel' });
  }
};
