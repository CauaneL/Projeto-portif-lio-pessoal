exports.sendMessages = async (body) => {
  // Simulação de envio
  const { clientes } = body;
  let enviados = 0, falhas = 0;
  if (!clientes || !Array.isArray(clientes)) return { enviados, falhas: 1, mensagem: 'Dados inválidos.' };
  clientes.forEach(() => enviados++);
  return { enviados, falhas, mensagem: 'Mensagens enviadas com sucesso.' };
};