const express = require('express')
const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

