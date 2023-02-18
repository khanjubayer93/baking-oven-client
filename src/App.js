import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Route';

const App = ({children}) => {
  return (
    <div>
      <RouterProvider router={router}>
        {children}
      </RouterProvider>
    </div>
  );
};

export default App;