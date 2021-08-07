const express = require('express');

const data = require('../data/data')

const dataJson = require('../data/todolist.json')
const obj = JSON.stringify(dataJson)
const jsObj = JSON.parse(obj)

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        jsObj: jsObj
    });
});

module.exports = router;