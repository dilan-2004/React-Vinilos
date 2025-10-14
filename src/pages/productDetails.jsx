import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import arrayproductos from '../data/arrayproductos';
import { useCart } from '../context/CartContext';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const foundProduct = arrayproductos.find((item) => item.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <Container className="my-5">
      <Card>
        <Card.Img variant="top" src={product.img} alt={product.nombre} />
        <Card.Body>
          <Card.Title>{product.nombre}</Card.Title>
          <Card.Text>{product.descripcion}</Card.Text>
          <ul dangerouslySetInnerHTML={{ __html: product.lista }}></ul>
          <h5>Precio: ${product.precio}</h5>
          <Button variant="success" onClick={() => addToCart(product)}>
            Agregar al Carrito
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductDetails;