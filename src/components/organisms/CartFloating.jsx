import { useCart } from '../../context/CartContext';
import { Offcanvas, Button } from 'react-bootstrap';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import '../../styles/organisms/CartFloating.css'; 

function CartFloating() {
  const { cartProducts, removeFromCart, total } = useCart();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="success"
        className="cart-floating-button"
        onClick={handleShow}
      >
        <FaShoppingCart size={24} />
        {cartProducts.length > 0 && (
          <span className="cart-badge">
            {cartProducts.length}
          </span>
        )}
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito ({cartProducts.length})</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartProducts.length === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            <>
              {cartProducts.map((item) => (
                <div key={item.id} className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <strong>{item.titulo}</strong>
                    <p className="mb-0">${item.precio} x {item.quantity}</p>
                  </div>
                  <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                    Eliminar
                  </Button>
                </div>
              ))}
              <hr />
              <h5>Total: ${total.toFixed(2)}</h5>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartFloating;