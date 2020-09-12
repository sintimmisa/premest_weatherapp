import React from 'react';



const SignUpForm =()=> {
    
    return (
        <form>
            <h3>Sign Up</h3>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username"/>

            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email" />

            </div>
            
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" />

            </div>

            <div className="form-group">
                <label>Confrim Password</label>
                <input type="password" className="form-control" placeholder="Confirm Password" />

            </div>
            <button className="btn btn-primary btn-block">Sign Up</button>

        </form>

    )
}
export default SignUpForm;