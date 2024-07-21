import './App.scss';
import {
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
    </BrowserRouter>
  );
}

export default App;