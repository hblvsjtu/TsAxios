/**
 * @file 本地服务器入口
 * @author lvhongbin(lvhongbin@baidu.com)
 */

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const STATIC_PATH = [
    '../dist',
    '../example'
];
function setCROS(res, target = '*') {
    res.header('Access-Control-Allow-Origin', target);
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
}
function setStaticPublic(dirs) {
    dirs.forEach(dir => app.use(express.static(path.resolve(__dirname, dir))));
    app.use(express.static(path.resolve(__dirname, '../dist')));
    app.use(express.static(path.resolve(__dirname, '../example')));
}
setStaticPublic(STATIC_PATH);

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded

function delayPromise(delay) { // 延迟promise
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), delay);
    });
}

app.get('/app/get', async (req, res) => {
    setCROS(res);
    await delayPromise(3000); // 延迟3秒
    res.send('Hello World!');
});

app.post('/app/post', (req, res) => {
    setCROS(res);
    res.json(req.body);
});

app.post('/app/buffer', (req, res) => {
    setCROS(res);
    let msg = [];
    req.on('data', chunk => msg.push(chunk));
    res.on('end', () => res.json(Buffer.concat(msg)));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
