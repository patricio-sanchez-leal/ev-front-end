import './App.css';
import Inicio from './Inicio';
import NavBar from './NavBar';
import Footer from './Footer';
import Cotizar from './Cotizar/Cotizar';
import Servicios from './Servicios/Servicios';

function App() {
  return (
    <>
    <NavBar/>
    <Inicio/>
    <Servicios/>
    <Cotizar/>
    <Footer/>
    </>
  );
}

export default App;
