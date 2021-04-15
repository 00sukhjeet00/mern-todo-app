import React from 'react'

export default function AuthComponent(Component: any) {
    return (props) => {
        const token = localStorage.getItem('token')
        if (!token)
            window.location.href = '/'
        return <Component {...props} />
    }
}
