const authService = require('../services/auth.service');

module.exports = (requiredRole = null) => {
  return (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).json({ message: 'Token ausente' });
    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Token ausente' });
    const user = authService.verifyToken(token);
    if (!user) return res.status(401).json({ message: 'Token inválido' });
    req.user = user;
    if (requiredRole && user.role !== requiredRole) {
      return res.status(403).json({ message: 'Permissão insuficiente' });
    }
    next();
  };
};