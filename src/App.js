import './App.scss';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import CategoryPage from './pages/CategoryPage/CategoryPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
      <Route path = "/meal/category/:name" element = {<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;