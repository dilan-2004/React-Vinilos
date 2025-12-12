import React, { useEffect, useState } from 'react';
import { getAllProducts, createProduct, deleteProduct } from '../../Services/ProductService';
import { getAllUsers, createUser, deleteUser } from '../../Services/UserService';
import { generarMensaje } from '../../utils/GenerarMensaje';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { productFormFields, userFormFields } from './data/AdminForms';
import '../../styles/pages/admin/formAdmin.css';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(
    productFormFields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );
  const [users, setUsers] = useState([]);
  const [userForm, setUserForm] = useState({
    nombre: '',
    email: '',
    password: '',
    rolId: 2
  });

  const loadProducts = async () => {
    setLoading(true);
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (e) {
      console.error('Error cargando productos:', e);
      if (e.response?.status === 403) {
        generarMensaje('No tienes permisos para ver productos', 'error');
      } else {
        generarMensaje('No se encontraron productos', 'info');
      }
      setProducts([]); 
    } finally {
      setLoading(false);
    }
  };

  const loadUsers = async () => {
  try {
    const data = await getAllUsers();
    setUsers(data);
  } catch (e) {
    console.error('Error cargando usuarios:', e);
    if (e.response?.status === 403) {
      generarMensaje('No tienes permisos de administrador', 'error');
    } else {
      generarMensaje('No se encontraron usuarios', 'info');
    }
    setUsers([]);
  }
};

  useEffect(() => { loadProducts(); }, []);
  useEffect(() => { loadUsers(); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleUserChange = (e) => setUserForm({ ...userForm, [e.target.name]: e.target.value });

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        titulo: form.titulo,
        descripcion: form.descripcion,
        precio: parseFloat(form.precio) || 0,
        stock: form.stock || '0',
        imagenUrl: form.imagenUrl,
        artista: form.artista ? { nombre: form.artista } : null,
        marca: form.marca ? { nombre: form.marca } : null
      };

      await createProduct(payload);
      generarMensaje('Producto creado', 'success');
      setForm(productFormFields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {}));
      loadProducts();
    } catch (err) {
      generarMensaje('Error creando producto', 'error');
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        nombre: userForm.nombre,
        email: userForm.email,
        password: userForm.password,
        rol: { id: parseInt(userForm.rolId) }
      };
      await createUser(payload);
      generarMensaje('Usuario creado', 'success');
      setUserForm({ nombre: '', email: '', password: '', rolId: 2 });
      loadUsers();
    } catch (err) {
      generarMensaje('Error creando usuario', 'error');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar producto?')) return;
    try {
      await deleteProduct(id);
      generarMensaje('Producto eliminado', 'success');
      loadProducts();
    } catch (err) {
      generarMensaje('Error eliminando producto', 'error');
    }
  };

  const handleDeleteUser = async (id) => {
    if (!confirm('¿Eliminar usuario?')) return;
    try {
      await deleteUser(id);
      generarMensaje('Usuario eliminado', 'success');
      loadUsers();
    } catch (err) {
      generarMensaje('Error eliminando usuario', 'error');
    }
  };

  return (
    <Container className="my-4">
      <h2 className="mb-4">Panel de Administración</h2>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="p-3">
            <h4>Crear Producto</h4>
            <Form onSubmit={handleCreate}>
              {productFormFields.map(field => (
                <Form.Group className="mb-2" key={field.name}>
                  <Form.Label>{field.label}</Form.Label>
                  <Form.Control
                    name={field.name}
                    type={field.type}
                    value={form[field.name] || ''}
                    onChange={handleChange}
                    placeholder={field.placeholder || ''}
                  />
                </Form.Group>
              ))}
              <Button type="submit" className="mt-2">Crear Producto</Button>
            </Form>
          </Card>
        </Col>
        <Col md={6}>
          <h4>Productos</h4>
          {loading ? <p>Cargando...</p> : products.length === 0 ? <p>No hay productos</p> : (
            products.map(p => (
              <Card key={p.id} className="mb-2">
                <Card.Body>
                  {p.imagenUrl && (
                    <img src={p.imagenUrl} alt={p.titulo} style={{ width: '80px', height: '80px', objectFit: 'cover', marginBottom: '8px' }} />
                  )}
                  <Card.Title>{p.titulo}</Card.Title>
                  <Card.Text>{p.descripcion}</Card.Text>
                  <div><strong>Precio:</strong> ${p.precio} | <strong>Stock:</strong> {p.stock}</div>
                  {p.artista && <div><strong>Artista:</strong> {p.artista.nombre}</div>}
                  {p.marca && <div><strong>Marca:</strong> {p.marca.nombre}</div>}
                  <Button variant="danger" size="sm" className="mt-2" onClick={() => handleDelete(p.id)}>Eliminar</Button>
                </Card.Body>
              </Card>
            ))
          )}
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="p-3">
            <h4>Crear Usuario</h4>
            <Form onSubmit={handleCreateUser}>
              {userFormFields.map(field => (
                <Form.Group className="mb-2" key={field.name}>
                  <Form.Label>{field.label}</Form.Label>
                  {field.type === 'select' ? (
                    <Form.Select name={field.name} value={userForm[field.name]} onChange={handleUserChange}>
                      {field.options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                    </Form.Select>
                  ) : (
                    <Form.Control
                      name={field.name}
                      type={field.type}
                      value={userForm[field.name] || ''}
                      onChange={handleUserChange}
                    />
                  )}
                </Form.Group>
              ))}
              <Button type="submit" className="mt-2">Crear Usuario</Button>
            </Form>
          </Card>
        </Col>
        <Col md={6}>
          <h4>Usuarios</h4>
          {users.length === 0 ? <p>No hay usuarios</p> : (
            users.map(u => (
              <Card key={u.id} className="mb-2">
                <Card.Body>
                  <Card.Title>{u.nombre}</Card.Title>
                  <Card.Text>{u.email}</Card.Text>
                  <div><strong>Rol:</strong> {u.rol?.nombre || `ID: ${u.rol?.id}`}</div>
                  <Button variant="danger" size="sm" className="mt-2" onClick={() => handleDeleteUser(u.id)}>Eliminar</Button>
                </Card.Body>
              </Card>
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;