import api, { setAuthToken } from './ApiClient';

export const login = async (email, password) => {
  try {
    const res = await api.post('/v1/auth/login', { email, password });
    const { token, user } = res.data;
    if (token) {
      setAuthToken(token);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    }
    return { token, user };
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const res = await api.post('/v1/usuarios', userData);
    return res.data;
  } catch (error) {
    console.error('Error al registrar:', error);
    throw error.response?.data || error;
  }
};

export const getAllUsers = async () => {
  try {
    const res = await api.get('/v1/usuarios');
    return res.data;
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error.response?.data || error;
  }
};

export const createUser = async (userData) => {
  try {
    const res = await api.post('/v1/usuarios', userData);
    return res.data;
  } catch (error) {
    console.error('Error al crear usuario:', error);
    throw error.response?.data || error;
  }
};

export const deleteUser = async (id) => {
  try {
    await api.delete(`/v1/usuarios/${id}`);
    return true;
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    throw error.response?.data || error;
  }
};

export const logout = () => {
  setAuthToken(null);
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export default { login, register, getAllUsers, createUser, deleteUser, logout };

