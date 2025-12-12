export const loginData = [
  {
    type: 'text',
    text: [
      {
        content: 'Inicio de Sesión',
        variant: 'h1',
        className: 'text-center text-4xl font-medium mb-10 text-white',
      },
    ],
  },
  {
    type: 'inputs',
    inputs: [
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
    text: 'Iniciar Sesión',
    className: 'transform',
  },
];