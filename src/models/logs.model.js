const logs = [];

exports.add = (entry) => {
  logs.push({ ...entry });
};

exports.getAll = (filter = {}) => {
  // Filtros: usuario, endpoint, status, intervalo de datas
  return logs.filter(log => {
    let ok = true;
    if (filter.usuario) ok = ok && log.usuario === filter.usuario;
    if (filter.endpoint) ok = ok && log.endpoint === filter.endpoint;
    if (filter.status) ok = ok && log.status === filter.status;
    if (filter.inicio) ok = ok && new Date(log.timestamp) >= new Date(filter.inicio);
    if (filter.fim) ok = ok && new Date(log.timestamp) <= new Date(filter.fim);
    return ok;
  });
};

exports.clear = () => {
  logs.length = 0;
};
