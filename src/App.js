import React, {Component} from 'react';
import './App.css';
import Hello from "./Frontend/app/components/hello-world/Hello";

class App extends Component {
  render() {
  return (
    <div className="App">
     <Hello></Hello>
    </div>
  );
  }
}

export default App;
