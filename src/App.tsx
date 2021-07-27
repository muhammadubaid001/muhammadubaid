import React from 'react';
import NavBar from './components/NavBar';
import Routing from './components/Routing';

const App: React.FC = () => {
  return (
    <div>
      <NavBar name="Ubaid" />
      <Routing />
    </div>
  );
}

export default App;
