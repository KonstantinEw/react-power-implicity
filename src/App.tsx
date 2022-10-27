import React from 'react';
import './styles/app.scss';
import { Header } from './components/Header/Header';
import { Slider } from './components/Slider/Slider';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Slider />
    </div>
  )
}

export default App;
