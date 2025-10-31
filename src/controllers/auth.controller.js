const authService = require('../services/auth.service');

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const token = await authService.login(username, password);
    if (!token) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
};