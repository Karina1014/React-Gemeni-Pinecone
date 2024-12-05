import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

const App = () => {
  return (
    <>
      <Sidebar>
        {/* Contenido hijo, si corresponde */}
      </Sidebar>
      <Main>
        {/* Contenido hijo, si corresponde */}
      </Main>
    </>
  );
};

export default App;
