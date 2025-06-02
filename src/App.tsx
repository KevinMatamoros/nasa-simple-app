import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ItemPage from './pages/ItemsPage/ItemPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemPage />} />
        <Route path="/asteroid/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
