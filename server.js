const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

function shouldCompress(req, res) {
  if (req.headers["x-no-compression"]) {
    // don't compress responses with this request header
    return false;
  }

  // fallback to standard filter function
  return compression.filter(req, res);
}

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(cors());
    server.use(bodyParser.json()); // to support JSON-encoded bodies
    server.use(
      bodyParser.urlencoded({
        // to support URL-encoded bodies
        extended: true
      })
    );
    server.use(compression({ filter: shouldCompress }));
    server.get("/ping", function(req, res) {
      return res.send("pong");
    });
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    const port = process.env.PORT || 9999;
    const host = "localhost";
    server.listen(port, host, err => {
      if (err) throw err;
      console.log("> Ready on http://" + host + ":" + port);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
