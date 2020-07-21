import React from 'react';
import "./styles/index.css"

import Header from "./components/Header/index"
import Boards from './components/Boards/Boards'

//use o fragment para a div que engloba os componentes não aparecer no html e atrapalhar a estilzação
function App() {
  return (
    <>
      <Header />
      <Boards />
    </>
  );
}

export default App;
