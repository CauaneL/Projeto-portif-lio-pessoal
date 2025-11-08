let clientes = [
  { id: '123', nome: 'Maria Silva', email: 'maria@exemplo.com', telefone: '11999999999', status: 'Em negociação', cpf: '12345678900', endereco: 'Rua A, 123' },
  { id: '124', nome: 'João Souza', email: 'joao@exemplo.com', telefone: '11988888888', status: 'Ativo', cpf: '98765432100', endereco: 'Rua B, 456' }
];

exports.getAll = () => clientes;

exports.getPublic = (limit = 500) => {
  return clientes.slice(0, limit).map(c => ({
    id: c.id,
    nome: c.nome,
    email: c.email,
    telefone: c.telefone,
    status: c.status
  }));
};

exports.updateStatuses = (updates) => {
  let atualizados = [];
  updates.forEach(u => {
    const cliente = clientes.find(c => c.id === u.id);
    if (cliente && cliente.status !== u.status_novo) {
      atualizados.push({ id: cliente.id, status_antigo: cliente.status, status_novo: u.status_novo });
      cliente.status = u.status_novo;
    }
  });
  return { sucesso: true, atualizados };
};

exports.updateStatusFromExcel = (row) => {
  const cliente = clientes.find(c => c.id === row.id);
  if (cliente && cliente.status !== row.status) {
    cliente.status = row.status;
    return true;
  }
  return false;
};