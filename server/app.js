const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('/Users/lvhongbin/Desktop/github/TsAxios/example'));
app.use(express.static('/Users/lvhongbin/Desktop/github/TsAxios/dist'))
app.get('/app', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));