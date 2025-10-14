import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';
import products from '../data/arrayproductos';
import { useCart } from '../context/CartContext';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Bienvenido a la Tienda de Vinilos</h1>
      <div className="d-flex justify-content-center mb-5">
        <Card style={{ width: '1000px', height: '540px', backgroundColor: 'rgba(245, 245, 220, 0.8)' }} className="text-center shadow">
          <Card.Img
            variant="top"
            src={products[currentIndex].img}
            alt={products[currentIndex].nombre}
            style={{ objectFit: 'cover', height: '250px' }}
          />
          <Card.Body>
            <Card.Title>{products[currentIndex].nombre}</Card.Title>
            <Card.Text>{products[currentIndex].descripcion}</Card.Text>
            <h5>${products[currentIndex].precio}</h5>
            <Button
              variant="primary"
              onClick={() => navigate(`/productos/${products[currentIndex].id}`)}
              style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}
            >
              Ver Producto
            </Button>
          </Card.Body>
        </Card>
      </div>

      <h2 className="text-center mb-4">Productos Destacados</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card className="shadow-sm" style={{ backgroundColor: 'rgba(245, 245, 220, 0.8)', height: '540px' }}>
              <Card.Img
                variant="top"
                src={product.img}
                alt={product.nombre}
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <Card.Body>
                <Card.Title>{product.nombre}</Card.Title>
                <Card.Text>{product.descripcion}</Card.Text>
                <h5>${product.precio}</h5>
                <div className="d-flex justify-content-between">
                  <Button
                    variant="success"
                    onClick={() => addToCart(product)}
                    style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}
                  >
                    Agregar al Carrito
                  </Button>
                  <Button
                    variant="info"
                    onClick={() => navigate(`/productos/${product.id}`)}
                    style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}
                  >
                    Ver Detalles
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;