import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import axios from 'axios'
export default function DashboardComponent() {
    const [addTodo, setaddTodo] = useState('')
    const [todoList, setTodoList] = useState([])
    const HandleAddTodo = () => {
        axios.post('/api/todo', { token: localStorage.getItem('token'), name: addTodo, isCompeleted: false })
        setaddTodo('')
        window.location.reload()
    }
    useEffect(() => {
        axios.get('/api/todo', { headers: { token: localStorage.getItem('token') } })
            .then(res => { setTodoList(res.data.todos) })
    }, [])
    return (
        <div className="dashboard-container">
            <h1><span>D</span>ashboard</h1><br />
            <form onSubmit={HandleAddTodo}>
                <TextField label="add something" value={addTodo} onChange={e => { setaddTodo(e.target.value) }} />
                <Button type="sumbit">Add todo</Button>
            </form>
            <div className="todo-list">
                {
                    todoList.map(todo => (
                        <div className="todo" key={todo._id}>
                            <h3><span>{todo.name}</span></h3>
                            {
                                todo.isCompeleted ? <Button>Compeleted</Button> : <Button onClick={() => { axios.post(`/api/todo/${todo._id}`, { token: localStorage.getItem('token') }) }}>Pending</Button>
                            }
                        </div>
                    ))
                }
            </div>
        </div >
    )
}
