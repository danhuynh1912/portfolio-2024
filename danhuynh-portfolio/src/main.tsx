import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';

// Components
import Section1 from './components/section1';
import SkillsPage from './pages/skills';

// Styles
import './index.css';
import Layout from './layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Section1 />,
  },
  {
    path: '/skills',
    element: <SkillsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Section1 />} />
          <Route path='/skills' element={<SkillsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
