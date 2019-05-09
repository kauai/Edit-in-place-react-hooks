import React, { Component,useState } from 'react';
import EditInPlace from './EditInPlace'

function App(){
  const [name,setName] = useState('Thiago')
  const [lastName,lastSetName] = useState('Viana')
    return (
      <div className="App">
        <header className="App-header">
             <EditInPlace value={name} onChangeValue={setName}/>
             <EditInPlace value={lastName} onChangeValue={lastSetName}/>
        </header>
      </div>
    )
}

export default App;
