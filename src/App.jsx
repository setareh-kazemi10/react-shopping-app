import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Home/index';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Shop from './pages/Shop/Shop';
import { CartContext, ContextProvider } from './context/CartContext';
import Cart from './pages/Shop/cart/Cart';
import Product from './pages/Product/Product';
import CheckOut from './pages/Shop/cart/checkout/CheckOut';
import SingleNews from './pages/News/Singlenews/SingleNews';
import NotFound from './pages/NotFound/NotFound';



const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/cart" element={<Cart />} />
          <Route path="/product/:productId"  element={<Product />} />
          <Route path="/shop/cart/checkout" element={<CheckOut />}/>
          <Route path="/news" element={<News />}/>
          <Route path="/singlenews/:newsId" element={<SingleNews />}/>
          <Route path="*" element={<NotFound />}/>
         
        </Routes>

      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;