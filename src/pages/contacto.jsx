import React from 'react';
import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !correo || !mensaje) {
      setError('Por favor, completa todos los campos.');
      setSuccess(false);
      return;
    }

    if (nombre.includes('\n') || correo.includes('\n') || mensaje.includes('\n')) {
      setError('Los campos no deben contener saltos de línea.');
      setSuccess(false);
      return;
    }

    const validDomains = ['@gmail.com', '@hotmail.com', '@duocuc.cl'];
    if (!validDomains.some((domain) => correo.endsWith(domain))) {
      setError('El correo debe ser de dominio @gmail.com, @hotmail.com o @duocuc.cl.');
      setSuccess(false);
      return;
    }

    setError(null);
    setSuccess(true);

    setNombre('');
    setCorreo('');
    setMensaje('');
  };

  return (
    <Container className="my-5" style={{ backgroundColor: 'rgba(245, 245, 220, 0.8)', padding: '20px', borderRadius: '10px' }}>
      <h2 className="text-center">Formulario de Contacto</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Formulario enviado con éxito.</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCorreo">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMensaje">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Escribe tu mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Enviar Formulario
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Contacto;