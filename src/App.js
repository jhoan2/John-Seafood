import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Footer from './components/Footer';
import Carousel  from './components/carousel/Carousel';
import Cart from './components/cart/Cart';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Carousel />
        <Cart />
        <Menu  />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
