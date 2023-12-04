const server = require("./src/App");
const { conn } = require("./db");
const PORT = 3001;

server.listen(PORT, () => {
  conn.sync({ alter: true });
  console.log(`Escuchando en el puerto: ${PORT}`);
});
