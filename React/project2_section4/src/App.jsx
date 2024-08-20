
import { useState } from 'react';

import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { EXAMPLES } from './data-with-examples.js';


function App() {

  return (
    <>
      <Header/>
      <main>
        <CoreConcept/>
        
      </main>     
    </>
  );
}

export default App;
