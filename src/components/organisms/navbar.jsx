import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import CartFloating from './CartFloating';
import logo from '../../assets/img/logo.webp';
import { FaUser, FaUserPlus, FaShoppingCart } from 'react-icons/fa';
import '../../styles/organisms/navbar.css'; 

function NavBar() {
  const { cartProducts, removeFromCart } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Navbar expand="lg" className="mb-3 custom-navbar" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="RetroVibe Logo"
            className="navbar-logo"
            />
          <span className="navbar-title">RetroVibe</span>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
            {(user?.rol === 'ADMIN' || user?.rol?.nombre === 'ADMIN') && (
              <Nav.Link as={Link} to="/admin/dashboard">Admin</Nav.Link>
            )}
          </Nav>
          <div className="d-flex align-items-center">
            {user ? (
              <>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={handleLogout}
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <div className="auth-buttons d-flex align-items-center">
                <button
                  className="icon-button"
                  onClick={() => navigate('/login')}
                >
                  <FaUser />
                  <span>Iniciar Sesión</span>
                </button>
                <button
                  className="icon-button"
                  onClick={() => navigate('/register')}
                >
                  <FaUserPlus />
                  <span>Registrarse</span>
                </button>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
      <CartFloating />
    </Navbar>
  );
}

export default NavBar;