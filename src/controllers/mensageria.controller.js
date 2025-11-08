const mensageriaService = require('../services/mensageria.service');

exports.send = async (req, res) => {
  try {
    const { nome, telefone, cpf } = req.body;

    // 🔹 Validação básica para evitar erro 200 em dados inválidos
    if (!nome || !telefone || !cpf) {
      return res.status(400).json({ erro: 'Dados inválidos' });
    }

    // 🔹 Chama o service e valida o retorno
    const result = await mensageriaService.sendMessages(req.body);

    if (!result || result.error) {
      return res.status(400).json({ erro: 'Falha ao enviar mensagem' });
    }

    // 🔹 Retorno esperado pelo teste
    return res.status(200).json({ mensagem: 'Mensagem enviada com sucesso' });

  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
    return res.status(500).json({ erro: 'Erro interno na requisição' });
  }
};
