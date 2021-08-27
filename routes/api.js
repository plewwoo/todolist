const express = require('express');
const router = express.Router();

const dataJson = require('../data/todolist.json')
const obj = JSON.stringify(dataJson)
const jsObj = JSON.parse(obj)

let currentTaskId = Object.keys(jsObj.task).length
// let currentTaskId = 0


router.get('/', (req, res) => {
    res.json(jsObj);
});

// router.get('/:id', (req, res) => {
//     const tasksId = Number.parseInt(req.params.id);
//     const task = jsObj.task.find((task) => task.id === tasksId)
//     res.json(task);
// });

router.post('/post', (req, res) => {
    currentTaskId += 1
    console.log('post id :', currentTaskId)
    const title = req.body.title

    const newTask = {
        id: currentTaskId,
        title: title
    };
    jsObj.task.push(newTask);
    res.json(newTask);
});

router.put('/update', (req, res) => {
    // const tasksId = Number.parseInt(req.params.id);
    // const taskIndex = jsObj.task.findIndex((task) => task.id === tasksId);

    const tasksId = req.body.id
    console.log('put id :', tasksId)
    const taskIndex = jsObj.task.findIndex((task) => task.id === tasksId);
    const title = req.body.title

    const updatedTask = {
        id: tasksId,
        title: title
    };
    jsObj.task[taskIndex] = updatedTask;
    res.json(updatedTask);
    console.log(updatedTask)
});

router.delete('/delete/:id', (req, res) => {
    const tasksId = Number.parseInt(req.params.id);
    console.log('delete id :', tasksId)
    const taskIndex = jsObj.task.findIndex((task) => task.id === tasksId);
    console.log('taskIndex:', taskIndex)
    jsObj.task.splice(taskIndex, 1);
    res.sendStatus(200)
});

module.exports = router;