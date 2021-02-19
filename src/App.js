import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Carousel  from './components/Carousel';

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
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
