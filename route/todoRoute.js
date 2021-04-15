const { Router } = require('express')
const Todo = require('../modal/todoModal')
const jwt = require('jsonwebtoken')
const todoRoute = Router()
todoRoute.get('/todo', (req, res) => {
    jwt.verify(req.headers.token, 'NULL', (err, decoded) => {
        if (err) throw err
        Todo.find({ user: decoded.userId }, (err, todos) => {
            if (err) throw err
            res.status(200).json({ todos: todos })
        })
    })
})
todoRoute.post('/todo', (req, res) => {
    jwt.verify(req.body.token, 'NULL', (err, decoded) => {
        if (err)
            return res.json({ message: 'not authorized' })
        const newTodo = new Todo({ name: req.body.name, isCompeleted: req.body.isCompeleted, user: decoded.userId })
        newTodo.save((err) => {
            if (err) throw err
            return res.status(200).json({ message: 'Todo added' })
        })
    })
})
todoRoute.post('/todo/:id', (req, res) => {
    jwt.verify(req.body.token, 'NULL', (err, decoded) => {
        if (err)
            return res.status(401).json({ message: 'not authorized' })
        Todo.findOne({ user: decoded.userId }, (err, todo) => {
            if (err) throw err
            todo.isCompeleted = true
            todo.save()
        })

    })
})
module.exports = todoRoute