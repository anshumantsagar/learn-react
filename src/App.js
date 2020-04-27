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
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <h1 className='error'>Error</h1>
      <h1 className={styles.sucess}>Sucess</h1>
      {/* <Inline/> */}
      {/* <Stylesheet primary={true}/>  */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/*
        <ParentComponent/>
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
