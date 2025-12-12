// src/pages/auth/data/createUserConfig.jsx
export const createUserConfig = [
  {
    type: 'text',
    text: [
      {
        content: 'Crear usuario',
        variant: 'h1',
        className: 'text-center text-4xl font-medium mb-10 text-white',
      },
    ],
  },
  {
    type: 'inputs',
    inputs: [
      {
        type: 'text',
        placeholder: 'Nombre usuario',
        name: 'nombre',
        value: '',
        required: true,
        autoComplete: 'off',
        className: 'w-full border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 mb-4',
      },
      {
        type: 'email',
        placeholder: 'Correo Electrónico',
        name: 'email',
        value: '',
        required: true,
        autoComplete: 'off',
        className: 'w-full border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 mb-4',
      },
      {
        type: 'password',
        placeholder: 'Contraseña',
        name: 'password',
        value: '',
        required: true,
        autoComplete: 'current-password',
        className: 'w-full border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500',
      },
    ],
    className: 'space-y-8',
  },
  {
    type: 'button',
    text: 'Crear usuario',
    className: 'transform w-full mt-4 mb-4 rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400',
  },
  {
    type: 'link',
    text: 'Ya tengo una cuenta',
    link: '/login',
    className: 'text-center text-lg text-indigo-400 hover:text-indigo-300 underline transition',
  },
];