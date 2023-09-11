import React from 'react' 

const AdminLogin = () =>
{
    return(

        <div class="center">
        <h2>Admin Login</h2>
        <form method="post">
          <div class="txt_field">
            <input type="text" required/>
            <span></span>
            <label>Username</label>
          </div>
          <div class="txt_field">
            <input type="password" required/>
            <span></span>
            <label>Password</label>
          </div>
          <div class="pass">Forgot Password?</div>
          <input type="submit" value="Login"/>
          <div class="signup_link">
           
          </div>
        </form>
      </div>
    )
}

export default AdminLogin;