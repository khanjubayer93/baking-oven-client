import React from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Route';

const App = ({ children }) => {
  return (
    <div>
      <RouterProvider router={router}>
        {children}
      </RouterProvider>
      <Toaster />
    </div>
  );
};

export default App;