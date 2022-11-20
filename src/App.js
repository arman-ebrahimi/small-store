import "bootstrap/dist/css/bootstrap.min.css";

import {ProductsPage} from "./components/product";
import './App.sass';
import {Navbar} from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductsPage />
    </div>
  );
}

export default App;
