import { Container } from 'react-bootstrap';
import '../styles/pages/nosotros.css';

function Nosotros() {
  return (
    <div className="nosotros-background">
      <div className="overlay"></div>

      <Container className="nosotros-card">
        <div className="text-center">
          <img
            src="/logo-vinilos.webp"
            alt="Logo de RetroVibe"
            className="logo-nosotros mb-4"
            style={{ maxWidth: '200px' }}
          />

          <h1 className="nosotros-title">Nosotros</h1>
        </div>

        <p>
          Todo comenzó con una conversación entre dos amigos: Dilan Barrios,
          Mathew Leyton, en una cafetería universitaria donde
          el ruido de la ciudad competía con el sonido de un viejo tocadiscos
          que giraba en una esquina. Entre risas, anécdotas y una pasión
          compartida por la música en su forma más auténtica, nació la idea de
          crear un espacio donde los vinilos no solo se vendieran, sino que se
          vivieran.
        </p>

        <p>
          Así nació RetroVibe, una tienda de discos pensada para quienes creen
          que la música no es solo sonido, sino memoria, textura y alma. Desde
          el primer día, el objetivo fue claro: rescatar el encanto del formato
          físico, conectar generaciones a través de los surcos de un vinilo, y
          ofrecer una experiencia que va más allá de lo digital.
        </p>

        <p>
          Dilan, con su ojo para el diseño y la estética vintage, se encargó de
          darle identidad visual a la tienda. Mathew, apasionado por la historia
          del rock y el jazz, curó el catálogo inicial. Matias, siempre
          conectada con la comunidad, convirtió RetroVibe en un punto de
          encuentro para melómanos, coleccionistas y curiosos.
        </p>

        <p>
          Hoy, RetroVibe no es solo una tienda: es un rincón cultural donde cada
          disco tiene una historia, cada cliente una recomendación, y cada visita
          una nueva canción por descubrir. Y aunque el mundo gira cada vez más
          rápido, nosotros seguimos creyendo que hay cosas que merecen girar
          lento… como un buen vinilo.
        </p>
      </Container>
    </div>
  );
}

export default Nosotros;