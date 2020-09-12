import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import LoginForm from './components/Forms/LoginForm';
import SignUpForm from './components/Forms/SignUpForm';
import HomeUI from './components/Views/HomeUI';



function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Navbar/>
      <div className="auth-container ">
        <div className="auth-content ">
          <Switch>
              <Route exact path='/' component={HomeUI} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path ="/signup" component={SignUpForm}/>
            
          </Switch>
        
      </div>
        </div>
      </div>
     
    </BrowserRouter>
    
  );
}
export default App;
