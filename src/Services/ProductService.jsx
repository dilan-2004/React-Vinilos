import api from './ApiClient';

export const getAllProducts = async () => {
    const res = await api.get('/v1/productos'); 
  return res.data;
};

export const createProduct = async (productData) => {
  const token = localStorage.getItem('token');
  const res = await api.post('/v1/productos', productData, {
    headers: { Authorization: `Bearer ${token}` } 
  });
  return res.data;
};

export const deleteProduct = async (id) => {
  const token = localStorage.getItem('token');
  await api.delete(`/v1/productos/${id}`, {
    headers: { Authorization: `Bearer ${token}` } 
  });
};

export default { getAllProducts, createProduct, deleteProduct };

