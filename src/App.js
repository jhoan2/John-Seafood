import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Footer from './components/Footer';
import Carousel  from './components/carousel/Carousel';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <Menu />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
