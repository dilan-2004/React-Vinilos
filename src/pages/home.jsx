import { useEffect, useState } from 'react';
import { getAllProducts } from '../Services/ProductService';

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
  try {
    const data = await getAllProducts();
    setProducts(data);
  } catch (error) {
    console.error('Error al cargar productos:', error);
    generarMensaje('No se pudieron cargar los productos', 'info');
    setProducts([]);
  }
};

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      {products.map(p => (
        <div key={p.id}>{p.titulo}</div>
      ))}
    </div>
  );
};

export default Home;