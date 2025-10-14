import { useCart } from '../../context/CartContext';
import { Offcanvas, Button } from 'react-bootstrap';
import { useState } from 'react';

function CartFloating() {
  const { cart, removeFromCart, total } = useCart();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Carrito ({cart.length})
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <strong>{item.nombre}</strong>
                    <p className="mb-0">${item.precio * item.quantity} x {item.quantity}</p>
                    <ul dangerouslySetInnerHTML={{ __html: item.lista }}></ul>
                  </div>
                  <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                    Eliminar
                  </Button>
                </div>
              ))}
              <hr />
              <h5>Total: ${total}</h5>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartFloating;