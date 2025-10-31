const jwt = require('jsonwebtoken');
const SECRET = 'crm_secret';

const users = [
  { username: 'admin', password: 'admin' }
];

exports.register = (username, password) => {
  if (users.find(u => u.username === username)) {
    return { success: false, message: 'Usuário já existe' };
  }
  users.push({ username, password });
  return { success: true, message: 'Usuário registrado com sucesso' };
};

exports.login = (username, password) => {
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return null;
  return jwt.sign({ username }, SECRET, { expiresIn: '1h' });
};

exports.verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
};