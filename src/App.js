import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from './components/sidebar/Sidebar'


const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <div style={{marginTop:"40px"}}>
        <Sidebar/>
        </div>
        

      </div>
      

      
      
      
    </>
  );
};
export default App;
