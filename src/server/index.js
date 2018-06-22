import compression from "compression";
import express from "express";
import request from "request";

if (process.env.DEV === "true") {
  const nowEnv = require("now-env");
}

const app = express();
const port = process.env.PORT || 8080;
app.use(compression());
app.enable("trust proxy");

app.use((req, res, next) => {
  if (req.secure || req.headers.host === `localhost:${port}`) {
    next();
  } else {
    res.redirect(`https://${req.headers.host}${req.url}`);
  }
});

app.get("/api/v1/github", (req, res) => {
  request(
    {
      url: `https://api.github.com/user/repos?affiliation=owner,collaborator&access_token=${
        process.env.githubAccessToken
      }`,
      headers: {
        "user-agent": "node.js"
      }
    },
    (err, response, body) => {
      if (!err && response.statusCode === 200) {
        res.send(body);
      }
    }
  );
});

app.use(express.static("./build"));

app.listen(port, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`App and API is live at http://localhost:${port}`);
});
