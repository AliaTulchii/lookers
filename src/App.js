import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Header from "./components/header/Header";
import "./styles/main.css"
import { Routes, Route } from "react-router-dom";
import Work from "./pages/work/Work";


function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/works" element={<Work/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        </Routes>
    </div>
  );
}

export default App;
