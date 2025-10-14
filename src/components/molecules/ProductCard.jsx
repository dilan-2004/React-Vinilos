import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';


function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem', height: '870px', backgroundColor: 'rgba(245, 245, 220, 0.8)' }} className="m-2">
      <Card.Img variant="top" src={product.img} alt={product.nombre} />
      <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>{product.descripcion}</Card.Text>
        <ul dangerouslySetInnerHTML={{ __html: product.lista }}></ul>
        <h5>${product.precio}</h5>
        <Button
          variant="success"
          onClick={() => addToCart(product)}
        >
          Agregar al Carrito
        </Button>
        <Button
          variant="info"
          onClick={() => navigate(`/productos/${product.id}`)}
        >
          Ver Detalles
        </Button>
      </Card.Body>
    </Card>
  );
}


export default ProductCard;