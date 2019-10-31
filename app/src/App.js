import React from 'react';
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import NavBar from './components/NavBar';
import Example  from './components/Carousel'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Example/>
    </div>
  );
}

export default App;
