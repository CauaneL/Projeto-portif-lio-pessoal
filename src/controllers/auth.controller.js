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

exports.register = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Usuário e senha obrigatórios' });
  }

  const result = authService.register(username, password);

  if (result.success) {
    return res.status(201).json({ message: result.message });
  } else {
    return res.status(400).json({ message: result.message });
  }
};
