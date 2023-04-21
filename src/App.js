import NavBar from './Components/NavBar/NavBar.js';
import Footer from './Components/Footer/Footer.js';
import FeaturedMovies from './Components/Homepage/FeaturedMovies.js';
import './App.css';

function App() {
  return (
    <div className="App">
    <NavBar />
    <FeaturedMovies />
    <Footer />
    </div>
  );
}

export default App;
