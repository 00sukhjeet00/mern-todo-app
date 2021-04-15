import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import axios from 'axios'
export default function RegisterComponent(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const HandleRegister = () => {
        axios.post('/auth/register', { username: username, password: password })
            .then((res) => {
                const { message } = res.data
                if (message)
                    alert(message)
            })
    }
    return (
        <div className="container">
            <h1>Register</h1>
            <form>
                <TextField label="username" value={username} onChange={e => { setUsername(e.target.value) }} /><br />
                <TextField label="password" type="password" value={password} onChange={e => { setPassword(e.target.value) }} /><br /><br />
                <Button onClick={HandleRegister}>register</Button>
            </form>
            <Link to='/'>already have account</Link>
        </div >
    )
}
