import React from 'react';


const LoginForm = () => {
    
    return (
        <form>
            <h3>Login</h3>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username" />

            </div>


            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" />

            </div>

    
            <button className="btn btn-primary btn-block">Login</button>

        </form>
    )
}
export default LoginForm;