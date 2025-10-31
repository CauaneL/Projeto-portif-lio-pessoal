const jwt = require('jsonwebtoken');
const SECRET = 'crm_secret';

const users = [
  { username: 'admin', password: 'admin' }
];

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