const express = require("express");
const CarRoutes = require("./components/CarRoutes");

const app = express();

app.use(express.json());
app.use("/", CarRoutes);

const port = process.env.PORT || 8080;

const server = app.listen("test" ? 0 : port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});

server.on("error", (error) => {
  console.error("Error occurred:", error);
});

module.exports = { app, server, port };
