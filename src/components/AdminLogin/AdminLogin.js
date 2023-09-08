import React from 'react'

import './AdminLogin.css'
const AdminLogin = () => {
    return (
    <>
            <div className="h4">AdminLogin</div>
        <div>
            <form >
                <label for="username">Username</label>
                <input type="text" id="username" name="username" />

                <label for="password">Password</label>
                <input type="text" id="password" name="password"  />
                <input type="submit" value="Sign In" />
            </form>
        </div>
    </>
    )
}

export default AdminLogin;