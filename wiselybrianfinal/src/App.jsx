import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Causes from "./pages/Causes";
import Effects from "./pages/Effects";
import Solutions from "./pages/Solutions";
import Types from "./pages/Types";
import Facts from "./pages/Facts";

function App() {
  return (
    <BrowserRouter>
      <nav className="bg--700 text-white p-4 flex gap-6 text-lg">
        <Link to="/">Home</Link>
        <Link to="/causes">Causes</Link>
        <Link to="/effects">Effects</Link>
        <Link to="/solutions">Solutions</Link>
        <Link to="/types">Types</Link>
        <Link to="/facts">Facts</Link>
      </nav>

      <div className="p-8 max-w-3xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/effects" element={<Effects />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/types" element={<Types />} />
          <Route path="/facts" element={<Facts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
