import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {ProductsPage} from "./components/product";
import {BillPage} from "./components/cart";
import './App.sass';
import {Navbar} from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<ProductsPage />} />
              <Route path="order" element={<BillPage />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
