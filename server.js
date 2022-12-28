const http = require("http");
const fs = require("fs");

const PORT = 5000;
const hostName = "localhost";

const home = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/about") {
    return res.end("<h1>ABOUT PAGE</h1>");
  } else if (req.url === "/contact") {
    return res.end("<h1>CONTACT PAGE</h1>");
  } else if (req.url === "/") {
    return res.end(home);
  } else {
    return res.end("<h1>ERRO 404: Page not found ):</h1>");
  }
});

server.listen(PORT, "localhost", () => {
  console.log(`Server running at port http://${hostName}:${PORT}/`);
});
