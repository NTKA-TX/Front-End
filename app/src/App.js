import React from 'react';
import { blue } from './styles/colors'

import './App.css';

//components
import {AppRouter} from './components/AppRouter';

function App() {
  return (
    <div className="App" >
      <AppRouter />
    </div>
  );
}

export default App;
