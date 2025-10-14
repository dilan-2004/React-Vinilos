import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';
import { Badge, Offcanvas, Button } from 'react-bootstrap';
import CartFloating from './CartFloating';
import logo from '../../assets/img/logo.webp';
import { FaUser, FaUserPlus, FaShoppingCart } from 'react-icons/fa';

function NavBar() {
 const { cart, removeFromCart } = useCart();
 const [showCart, setShowCart] = useState(false);

 const handleClose = () => setShowCart(false);
 const handleShow = () => setShowCart(true);

 return (
   <Navbar expand="lg" className="mb-3 custom-navbar">
     <Container>
       <Navbar.Brand href="/" className="d-flex align-items-center">
         <img
           src={logo}
           alt="RetroVibe Logo"
           style={{ height: '40px', marginRight: '10px' }}
         />
         RetroVibe
       </Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
           <Nav.Link href="/">Inicio</Nav.Link>
           <Nav.Link href="/productos">Productos</Nav.Link>
           <Nav.Link href="/blog">Blog</Nav.Link>
           <Nav.Link href="/contacto">Contacto</Nav.Link>
           <Nav.Link href="/nosotros">Nosotros</Nav.Link>
         </Nav>
         <div className="auth-buttons">
           <button className="icon-button" onClick={() => window.location.href = '/login'}>
             <FaUser />
             <span>Iniciar Sesión</span>
           </button>
           <button className="icon-button" onClick={() => window.location.href = '/register'}>
             <FaUserPlus />
             <span>Registrarse</span>
           </button>
         </div>
         
         <Offcanvas show={showCart} onHide={handleClose} placement="end">
           <Offcanvas.Header closeButton>
             <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
           </Offcanvas.Header>
           <Offcanvas.Body>
             {cart.length === 0 ? (
               <p>Tu carrito está vacío.</p>
             ) : (
               cart.map((item) => (
                 <div key={item.id} className="d-flex justify-content-between align-items-center mb-3">
                   <div>
                     <strong>{item.name}</strong>
                     <p className="mb-0">${item.price} x {item.quantity}</p>
                   </div>
                   <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                     Eliminar
                   </Button>
                 </div>
               ))
             )}
           </Offcanvas.Body>
         </Offcanvas>
       </Navbar.Collapse>
     </Container>
     <CartFloating />
   </Navbar>
 );
}

export default NavBar;