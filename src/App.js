import React from 'react';
import MainHeader from './Components/Header'
import './styles.css'
import Routes from "./routes";

const App = () =>(
  <div className="App">
    <MainHeader />
    <Routes/>
  </div>
);

export default App;
