import { Routes, Route } from 'react-router-dom';
import NavBar from './components/organisms/navbar';
import Home from './pages/home';
import Products from './pages/productos.jsx';
import Login from './pages/login';
import Register from './pages/register';
import ProductDetails from './pages/productDetails';
import Blog from './pages/blog';
import Footer from './components/organisms/footer.jsx';
import Contacto from './pages/contacto';
import Nosotros from './pages/nosotros';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productos/:id" element={<ProductDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

