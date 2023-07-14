import React from 'react';
import { RouterProvider } from 'react-router-dom';
import rootRouter from './router';
import { IssuesProvider } from './contexts/IssuesContext';

function App() {
  return (
    <IssuesProvider>
      <RouterProvider router={rootRouter} />
    </IssuesProvider>
  );
}

export default App;
