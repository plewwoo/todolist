const express = require('express');
const router = express.Router();

let data = require('../data/data')

const dataJson = require('../data/todolist.json')
const obj = JSON.stringify(dataJson)
const jsObj = JSON.parse(obj)

let currentTaskId = Object.keys(jsObj.task).length;
console.log(currentTaskId)

router.get('/', (req, res) => {
    res.json(jsObj);
});

router.get('/:id', (req, res) => {
    const tasksId = Number.parseInt(req.params.id);
    const task = jsObj.task.find((task) => task.id === tasksId)
    res.json(task);
});

router.post('/', (req, res) => {
    currentTaskId += 1;
    const newTask = {
        id: currentTaskId,
        ...req.body
    };
    jsObj.task.push(newTask);
    res.json(newTask);
});

router.patch('/:id', (req, res) => {
    const tasksId = Number.parseInt(req.params.id);
    const taskIndex = jsObj.task.findIndex((task) => task.id === tasksId);
    const updatedTask = {
        id: tasksId,
        ...req.body
    };
    jsObj.task[taskIndex] = updatedTask;
    res.json(updatedTask);
});

router.delete('/:id', (req, res) => {
    currentTaskId -= 1
    const tasksId = Number.parseInt(req.params.id);
    const taskIndex = jsObj.task.findIndex((task) => task.id === tasksId)
    jsObj.task.splice(taskIndex, 1);
    res.sendStatus(200)
});

module.exports = router;