import React, { Component,useState } from 'react';
import EditInPlace,{ TextArea } from './EditInPlace'

function App(){
  const [name,setName] = useState('Thiago')
  const [lastName,lastSetName] = useState('Viana')
    return (
      <div className="App">
        <header className="App-header">
             <EditInPlace viewAs="h1" value={name} onChangeValue={setName}/>
             <EditInPlace viewAs="pre" value={lastName} onChangeValue={lastSetName}/>
             <TextArea viewAs="pre" value={lastName} onChangeValue={lastSetName}/>
        </header>
      </div>
    )
}

export default App;
