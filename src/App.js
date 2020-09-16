import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import LoginForm from './components/Forms/LoginForm';
import SignUpForm from './components/Forms/SignUpForm';
import HomeUI from './components/Views/HomeUI';
import WeatherUI  from './components/Views/WeatherUI';



function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Navbar/>
     
          <Switch>
              <Route exact path='/' component={WeatherUI} />
               <div className="auth-container ">
        <div className="auth-content ">
              <Route exact path="/login" component={LoginForm} />
              <Route exact path ="/signup" component={SignUpForm}/>
              
            </div>
        </div>
        
          </Switch>
        
      
      </div>
     
    </BrowserRouter>
    
  );
}
export default App;
