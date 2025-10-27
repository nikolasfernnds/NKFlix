import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Log de requisições (opcional)
app.use((req, res, next) => {
  console.log(`Requisição: ${req.method} ${req.url}`);
  next();
});

// Servir arquivos estáticos
app.use(express.static(__dirname));

// Endpoint simples de teste da API
app.get('/api', (req, res) => {
  res.json({ message: 'API está funcionando' });
});

// ⚠️ Rota "catch-all" corrigida com REGEX para evitar erros no Node.js v22
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
