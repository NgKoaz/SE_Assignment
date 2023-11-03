import React from 'react'

const Form = () => {
  return (
    <div>
        <form method="post">
            <div class="txt_field">
                <label>Username</label>
                <input type="text" required />

                <label>Password</label>
                <input type="password" required />
            </div>
            <div class="pass">
                Forgot Password?
            </div>
            <input type="submit" value="Login" />
        </form>
    </div>
  )
}

export default Form