import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";

import Home from "./pages/Home";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
