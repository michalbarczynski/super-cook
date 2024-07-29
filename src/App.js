import './App.scss';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import CategoryPage from './pages/CategoryPage/CategoryPage';
import MealDetailsPage from './pages/Meal/MealDetailsPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/meal/category/:name" element = {<CategoryPage />} />
        <Route path = "/meal/:id" element = {<MealDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;