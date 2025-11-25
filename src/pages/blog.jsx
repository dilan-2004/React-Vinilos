import { Card, Container, Row, Col } from 'react-bootstrap';
import '../styles/global.css';
import '../styles/pages/blog.css';
function Blog() {
 return (
   <Container className="blog-container">
     <h1 className="text-center">NOTICIAS IMPORTANTES</h1>
     <Row>
       <Col md={6} className="blog">
         <Card>
           <Card.Img variant="top" src="https://cdn-images.dzcdn.net/images/cover/941c2d3c366affdc662956559e078a4e/0x1900-000000-80-0-0.jpg" alt="imagenNoticia" />
           <Card.Body>
             <Card.Title>The Marshall Mathers LP": El vinilo que marcó una generación</Card.Title>
             <Card.Text>
               Publicado el: 07 de septiembre, 2025.<br />
               Categoría: Hip-Hop/Vinilos Clásicos.
             </Card.Text>
             <Card.Text>
               En el año 2000, Eminem lanzó The Marshall Mathers LP, un álbum que no solo consolidó su carrera, sino que también cambió para siempre la forma en que el rap era percibido en la industria musical. Con letras intensas, ritmos crudos y una honestidad brutal, este disco se convirtió rápidamente en uno de los más influyentes de la historia del hip-hop.
             </Card.Text>
             <div className="card-text">
               <strong>¿Por qué este álbum es tan importante?</strong>
               <ul>
                 <li>Impacto cultural: canciones como Stan y The Real Slim Shady conectaron con audiencias globales.</li>
                 <li>Ventas históricas: debutó en el puesto #1 de Billboard y rompió récords de ventas en su primera semana.</li>
                 <li>Autenticidad: Eminem reflejó en sus letras su vida personal, sus conflictos y su visión del mundo.</li>
               </ul>
             </div>
           </Card.Body>
         </Card>
       </Col>
       <Col md={6} className="mb-4">
         <Card>
           <Card.Img variant="top" src="https://www.ruta66.es/wp-content/uploads/2025/09/bruce-nebraska-82-380x250.jpg" alt="Bruce Springsteen Nebraska 82 Expanded Edition" />
           <Card.Body>
             <Card.Title>"Nebraska '82: Expanded Edition": El espíritu de Springsteen en vinilo</Card.Title>
             <Card.Text>
               Publicado el: 04 de septiembre, 2025.<br />
               Categoría: Rock clásico/Vinilos de colección.
             </Card.Text>
             <Card.Text>
               El mítico álbum <strong>Nebraska</strong> de Bruce Springsteen recibe una reedición especial titulada <strong>Nebraska '82: Expanded Edition</strong>, disponible desde el <strong>17 de octubre de 2025</strong>. La edición ofrecerá tanto la versión de <em>4 CD + Blu-ray</em> como la igualmente exclusiva de <em>4 vinilos + Blu-ray</em>, ampliando la experiencia más allá del álbum original.
             </Card.Text>
             <div className="card-text">
               <strong>¿Por qué esta edición es imperdible?</strong>
               <ul>
                 <li>Rareza sonora: Incluye grabaciones caseras inéditas, sesiones eléctricas con la E Street Band y la actuación en vivo dirigida por Thom Zimny.</li>
                 <li>Formato de lujo: Disponible en vinilo doble o cuádruple acompañado de Blu-ray.</li>
                 <li>Valor artístico: No se trata solo de una remasterización, sino de una ventana al proceso creativo de Springsteen.</li>
               </ul>
             </div>
           </Card.Body>
         </Card>
       </Col>
     </Row>
   </Container>
 );
}

export default Blog;