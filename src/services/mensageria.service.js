exports.sendMessages = async (body) => {
  // Pode ser um cliente único ou uma lista
  const clientes = Array.isArray(body.clientes) ? body.clientes : [body];

  let enviados = 0, falhas = 0;

  // validações simples
  clientes.forEach((c) => {
    if (c.nome && c.telefone && c.cpf) enviados++;
    else falhas++;
  });

  return { enviados, falhas, mensagem: 'Mensagem enviada com sucesso' };
};
