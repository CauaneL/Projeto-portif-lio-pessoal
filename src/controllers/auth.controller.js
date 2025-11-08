// Exemplo para criar login admin via /auth/register:
// {
//   "username": "admin",
//   "password": "sua_senha_segura",
//   "role": "admin"
// }

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
    res.status(400).json({ message: 'Erro na requisição' });
  }
};

exports.register = (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Usuário e senha obrigatórios' });
  }

  const result = authService.register(username, password, role || 'admin');

  if (result.success) {
    return res.status(201).json({ message: result.message });
  } else {
    return res.status(400).json({ message: result.message });
  }
};
