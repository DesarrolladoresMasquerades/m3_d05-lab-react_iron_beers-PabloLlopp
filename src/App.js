import {Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BeersPage from "./pages/BeersPage";
import BeerDetailPage from "./pages/BeerDetailPage";
import BeerRandomPage from "./pages/BeerRandomPage";
import NewBeerPage from "./pages/NewBeerPage";

function App() {
  return (
    <div className="App">
    <Navbar />
        <Routes>
          <Route exact path="/beers/new-beer" element={<NewBeerPage />} />
          <Route exact path="/beers/random-beer" element={<BeerRandomPage />} />
          <Route exact path="/beers/:beerId" element={<BeerDetailPage />} />
          <Route exact path="/beers" element={<BeersPage />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
    </div>
  );
}

export default App;
