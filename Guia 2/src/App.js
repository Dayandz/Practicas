import React from 'react';
import './App.css';
import Form from './components/Form';

const App=() => {
  return (
    <div className="App">
      <div className="App-content">
        <p>aqui haremos nuestro TO-DO LIST</p>
        <Form/>
      </div>
    </div>
  );
}

export default App;
