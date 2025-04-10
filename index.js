const express = require('express');
const crypto = require('crypto');
const app = express();

app.use(express.json());

function sha256(text) {
  return crypto.createHash('sha256').update(text.toLowerCase().trim()).digest('hex');
}

app.post('/hash', (req, res) => {
  const { email = '', telefone = '', nome = '' } = req.body;

  res.json({
    email_hash: sha256(email),
    telefone_hash: sha256(telefone),
    nome_hash: sha256(nome)
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Rodando na porta ${port}`);
});