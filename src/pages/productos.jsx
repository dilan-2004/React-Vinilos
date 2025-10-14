import React from 'react';
import { Container, Row } from 'react-bootstrap';
import products from '../data/arrayproductos';
import ProductCard from '../components/molecules/ProductCard';


function Products() {
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