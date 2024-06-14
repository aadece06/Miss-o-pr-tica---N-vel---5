const express = require('express');
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');
const router = express.Router();

router.get('/', async (req, res) => {
  const livros = await obterLivros();
  res.json(livros);
});

router.post('/', async (req, res) => {
  const novoLivro = req.body;
  await incluir(novoLivro);
  res.json({ message: 'Livro incluído com sucesso' });
});

router.delete('/:codigo', async (req, res) => {
  const codigo = req.params.codigo;
  await excluir(codigo);
  res.json({ message: 'Livro excluído com sucesso' });
});

module.exports = router;
