let clientes = [
  { id: '123', nome: 'Maria Silva', status: 'Em negociação' },
  { id: '124', nome: 'João Souza', status: 'Ativo' }
];

exports.getAll = () => clientes;

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