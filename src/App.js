import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import WeatherUI from "./components/Views/WeatherUI";
import AuthUI from "./components/Views/AuthUI";

function App() {
  return (
    <BrowserRouter>
      <Switch></Switch>
      <AuthUI />
      <WeatherUI />
    </BrowserRouter>
  );
}

export default App;
