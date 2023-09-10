import React from 'react' 

const UserSignUp = () =>
{
    return(

        <div class="center">
        <h2>Signup</h2>
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
            Not a member? <a href="#">Signup</a>
          </div>
        </form>
      </div>
    )
}

export default UserSignUp;