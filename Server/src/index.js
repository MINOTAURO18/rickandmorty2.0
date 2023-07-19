const http = require("http");
const PORT = 3001;
const getCharById = require("./controllers/getCharById");

http
  .createServer((req, res) => {
    const { url } = req;
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (url.includes("rickandmorty/character")) {
      let id = url.split("/").pop();
      getCharById(res, id);
    }
  })
  .listen(PORT);
