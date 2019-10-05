import React from 'react';

// ROUTER
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import { routes } from 'config/routes';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        {renderRoutes(routes)}
      </div>
    </BrowserRouter>
  );
}

export default App;
