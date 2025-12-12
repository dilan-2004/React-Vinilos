import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Forms from '../../templates/Forms.jsx';
import { createUserConfig } from './Data/createUserConfig.jsx';
import { register } from '../../Services/UserService.jsx';
import { generarMensaje } from '../../utils/GenerarMensaje.jsx';
import '../../styles/pages/formularios.css';

const CreateUser = () => {
  const [form, setForm] = useState({ nombre: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
  const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.password) {
      generarMensaje('Completa todos los campos', 'warning');
      return;
    }

    setLoading(true);
    try {
      const userData = {
        nombre: form.nombre,
        email: form.email,
        password: form.password,
        rol: { id: 2 }
      };
      const created = await register(userData);
      generarMensaje('Usuario creado!', 'success');
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      console.error('Register error (catch):', error);
      const serverMsg = error?.message || (error?.body && JSON.stringify(error.body));
      generarMensaje(serverMsg || 'Error al crear usuario', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="formulario">
      <Forms
        content={createUserConfig}
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        loading={loading}
        navigateToLogin={() => navigate('/login')}
      />
    </div>
  );
};

export default CreateUser;
