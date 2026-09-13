const express = require('express');

const app = express();

app.get('/teste', (req, res) => {
  res.status(200).json({
    mensagem: 'GET de teste executado com sucesso!',
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
}


module.exports = app;