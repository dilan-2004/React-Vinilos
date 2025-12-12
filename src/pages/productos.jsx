// src/pages/productos.jsx
import { useState, useEffect } from 'react';
import { Container, Row, Alert } from 'react-bootstrap';
import ProductCard from '../components/molecules/ProductCard';
import { getAllProducts } from '../Services/ProductService';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error al cargar productos:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>;
  }
  if (error) {
    const status = error?.response?.status;
    return (
      <Container className="my-5">
        <h1>Productos</h1>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h1>Productos</h1>
      <Row>
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            cardStyle={{ backgroundColor: 'rgba(245, 245, 220, 0.8)', height: '540px' }}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Products;