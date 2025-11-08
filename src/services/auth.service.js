const jwt = require('jsonwebtoken');
const SECRET = 'crm_secret';

const users = [
  { username: 'admin', password: 'admin', role: 'admin' },
  { username: 'user', password: 'user', role: 'admin' }
];

exports.register = (username, password, role = 'admin') => {
  if (users.find(u => u.username === username)) {
    return { success: false, message: 'Usuário já existe' };
  }
  users.push({ username, password, role });
  return { success: true, message: 'Usuário registrado com sucesso' };
};

exports.login = (username, password) => {
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return null;
  return jwt.sign({ username: user.username, role: user.role }, SECRET, { expiresIn: '1h' });
};

exports.verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
};