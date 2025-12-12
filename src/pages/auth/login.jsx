import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; 
import Forms from '../../templates/Forms';
import { loginData } from './Data/LoginData';
import { login as loginService } from '../../Services/UserService';
import { generarMensaje } from '../../utils/GenerarMensaje';
import '../../styles/pages/formularios.css'; 

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login: loginContext } = useAuth(); 
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      generarMensaje('Completa todos los campos', 'warning');
      return;
    }

    setLoading(true);
    try {
      const userData = await loginService(form.email, form.password);
      loginContext(userData);
      
      if (userData.user.rol === 'ADMIN') {
        navigate('/admin/dashboard', { replace: true });
      } else {
        navigate('/', { replace: true });
      }
    } catch (error) {
      const msg = error.response?.data?.error || 'Error al iniciar sesión';
      generarMensaje(msg, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="formulario">
      <Forms
        content={loginData}
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
};

export default Login;
