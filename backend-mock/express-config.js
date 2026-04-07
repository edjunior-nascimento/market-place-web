const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json()); // para aceitar JSON no body

app.get('/api/produtos', (req, res) => {      
  const filePath = path.join(__dirname, 'json/produtos.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({
        code: 500,
        status: "error",
        message: "Erro ao carregar os dados dos produtos",
        data: null
      });
    }

    try {
      const produtos = JSON.parse(data);
      return res.status(200).json({
        code: 200,
        status: "success",
        message: "Produtos retornados com sucesso",
        data: produtos
      });

    } catch (parseError) {
       return res.status(500).json({
        code: 500,
        status: "error",
        message: "Erro ao interpretar produtos",
        data: null
      });
    }
  });
});

//Outros Exemplos
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'João' },
    { id: 2, name: 'Maria' }
  ]);
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === '1234') {
    res.json({ token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

// Start do servidor
app.listen(PORT, () => {
  console.log(`Mock API rodando em http://localhost:${PORT}`);
});
