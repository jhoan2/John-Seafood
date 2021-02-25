import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Footer from './components/Footer';
import Carousel  from './components/carousel/Carousel';
import Cart from './components/cart/Cart';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/cart';

const initialStore = {
  cart: [],
  quantityById: {}
}

const store = createStore(reducer, initialStore);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Carousel />
        <Cart />
        <Menu />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
