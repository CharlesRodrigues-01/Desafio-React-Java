import React from 'react';
import './App.css';
import Busca from './componentes/Busca';
import NavBar from './componentes/NavBar';


class App extends React.Component {
  
  render () {
  return (
    <div className="App">
      <div className="NavBar">
        <NavBar/>
      </div>
      <div className="Busca">
        <Busca/>
    </div>
    </div>
  );
  }
}

export default App;
