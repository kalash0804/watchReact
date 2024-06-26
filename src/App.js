import logo from './logo.svg';
import './App.css';
import DigiNavbar from './components/DigiNavbar';
import Home from './components/Home';
import Products from './components/Products';
import NewArrival from './components/NewArrival';
import Offers from './components/Offers';
import Collections from './components/Collections';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* <h1>welcome to digiprofile</h1> */}
      <DigiNavbar/>
      {/* <div class="container-fluid"> */}
      <Home/>
      <Products/>
      <NewArrival/>
      <Offers/>
      <Collections/>
      <Footer/>
      
    </div>
  );
}

export default App;
