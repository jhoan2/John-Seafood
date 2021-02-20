import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Footer from './components/Footer';
import Carousel  from './components/carousel/Carousel';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Cart />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
