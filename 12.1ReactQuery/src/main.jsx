import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient ,QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Pagination from './Pagination.jsx';
import Parallel from './Parallel.jsx';
import Optimization from './Optimization.jsx';
import Dependent from './Dependent.jsx';
export const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: 'paginated',
        element: <Pagination />,
    },
    {
        path: 'parallel',
        element: <Parallel />,
    },
    {
        path: 'optimistic',
        element: <Optimization />,
    },
    {
        path: 'dependent',
        element: <Dependent />,
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
)
