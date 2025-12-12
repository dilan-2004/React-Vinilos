import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, cardStyle }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleViewDetails = () => {
    navigate(`/productos/${product.id}`);
  };

  return (
    <Card style={cardStyle} className="shadow-sm">
      {product.imagenes?.[0]?.url ? (
        <Card.Img
          variant="top"
          src={product.imagenes[0].url}
          alt={product.titulo}
          style={{ objectFit: 'cover', height: '200px' }}
        />
      ) : (
        <div style={{ height: '200px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Sin imagen
        </div>
      )}
      <Card.Body>
        <Card.Title>{product.titulo}</Card.Title>
        <Card.Text>{product.descripcion}</Card.Text>
        <h5>${product.precio}</h5>
        <div className="d-flex justify-content-between">
          <Button
            variant="success"
            onClick={handleAddToCart}
            style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}
          >
            Agregar al Carrito
          </Button>
          <Button
            variant="info"
            onClick={handleViewDetails}
            style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}
          >
            Ver Detalles
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;