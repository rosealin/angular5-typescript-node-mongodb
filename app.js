const express = require('express')
const bodyParser = require('body-parser');
const app = express()
let db = require("./db.js")

app.use(bodyParser.json());// 添加json解析
app.use(bodyParser.urlencoded({extended: true}));

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Content-Type", "application/json");
    next();
});

const questions = []

app.get('/123', function (req, res) {
    res.status(200);
    db.findAll("site", function (err, result) {
        if (err) {
            console.log("failure");
            return;
        }
        res.send(result);
    })
})
app.post('/123', function (req, res) {
    res.status(200);
    let obj = {
        'name': req.body.name,
        'age': req.body.age,
        'interests': req.body.interests,
        'userInfo': req.body.userInfo
    }
    db.insertOne("site", obj, function (err, result) {
        if (err) {
            console.log("failure");
            return;
        }
        res.send("success");
    })
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('app listening on port 3000!'))
