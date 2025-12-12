
export const productFormFields = [
  { name: 'imagenUrl', label: 'URL de la imagen', type: 'text', placeholder: 'https://ejemplo.com/imagen.jpg' },
  { name: 'artista', label: 'Artista', type: 'text', placeholder: 'Nombre del artista' },
  { name: 'marca', label: 'Marca (Discográfica)', type: 'text', placeholder: 'Nombre de la discográfica' },
  { name: 'titulo', label: 'Título', type: 'text' },
  { name: 'descripcion', label: 'Descripción', type: 'text' },
  { name: 'precio', label: 'Precio', type: 'number' },
  { name: 'stock', label: 'Stock', type: 'text' },
];

export const userFormFields = [
  { name: 'nombre', label: 'Nombre', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Contraseña', type: 'password' },
  { 
    name: 'rolId', 
    label: 'Rol', 
    type: 'select', 
    options: [
      { value: 2, label: 'USUARIO' },
      { value: 1, label: 'ADMIN' }
    ] 
  },
];