import compression from 'compression';
import express from 'express';
import fs from 'fs';
import request from 'request';

const app = express();
const port = process.env.PORT || 8080;
app.use(compression());

let keys;
if (fs.existsSync('./keys.json')) {
  keys = require('./keys.json');
} else {
  keys = JSON.parse(process.env.VCAP_SERVICES)['user-provided'][0].credentials;
}

app.get('/github', (req, res) => {
  request({
    url: `https://api.github.com/user/repos?affiliation=owner,collaborator&access_token=${keys.github}`,
    headers: {
      'user-agent': 'node.js',
    },
  }, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      res.send(body);
    }
  });
});

app.use(express.static('./build'));
app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is live at http://localhost:${port}`);
});
