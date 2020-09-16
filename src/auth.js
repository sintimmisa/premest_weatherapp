import React, { useContext } from "react";
import { AuthContext } from "./context";



const  Auth=()=>{
   const authContext = useContext(AuthContext);
   const loginHandler = () => {
       authContext.login();
   };
   const logoutHandler = () => {
       authContext.logout();
   };
return (
       <div>
          {!authContext.isLoggedIn && <button className="login" onClick={loginHandler}>Login</button>}
        {authContext.isLoggedIn && (<button className="login" onClick={logoutHandler}>Logout</button>)}
       </div>
   )
}
export default Auth;