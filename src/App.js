import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello1 from './components/Hello1'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <ParentComponent/>
      {/*
        <EventBind/>
        <FunctionClick></FunctionClick>
        <ClassClick/>
        <Welcome name='Anmol' heroName='Pradhan'>babu props</Welcome>
        <Greet name="Anmol" heroName='Pradhan'>Babu props</Greet>
        <Counter/>
        <Message/>
        <Greet name="Ashutosh" heroName='Doggy'>
          <button>bhow-bhow</button>
        </Greet>
        <Greet name="Adarsh" heroName='Kammi'/>
        */}

    </div>
  );
}

export default App;
