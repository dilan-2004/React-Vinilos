import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contacto from '../../pages/contacto';

describe('Contacto Page', () => {
  it('renderiza el título del formulario', () => {
    render(<Contacto />);
    const title = screen.getByText('Formulario de Contacto');
    expect(title).not.toBeNull();
    expect(title.tagName).toBe('H2');
  });

  it('muestra un mensaje de error si los campos están vacíos', () => {
    render(<Contacto />);
    const submitButton = screen.getByText('Enviar Formulario');
    fireEvent.click(submitButton);
    const errorMessage = screen.getByText('Por favor, completa todos los campos.');
    expect(errorMessage).not.toBeNull();
  });

  it('muestra un mensaje de error si el correo no tiene un dominio válido', () => {
    render(<Contacto />);
    fireEvent.change(screen.getByPlaceholderText('Ingresa tu nombre completo'), { target: { value: 'Juan Pérez' } });
    fireEvent.change(screen.getByPlaceholderText('Ingresa tu correo'), { target: { value: 'juan@correo.com' } });
    fireEvent.change(screen.getByPlaceholderText('Escribe tu mensaje'), { target: { value: 'Hola, este es un mensaje.' } });
    fireEvent.click(screen.getByText('Enviar Formulario'));
    const errorMessage = screen.getByText('El correo debe ser de dominio @gmail.com, @hotmail.com o @duocuc.cl.');
    expect(errorMessage).not.toBeNull();
  });

  it('muestra un mensaje de éxito si el formulario se envía correctamente', () => {
    render(<Contacto />);
    fireEvent.change(screen.getByPlaceholderText('Ingresa tu nombre completo'), { target: { value: 'Juan Pérez' } });
    fireEvent.change(screen.getByPlaceholderText('Ingresa tu correo'), { target: { value: 'juan@gmail.com' } });
    fireEvent.change(screen.getByPlaceholderText('Escribe tu mensaje'), { target: { value: 'Hola, este es un mensaje.' } });
    fireEvent.click(screen.getByText('Enviar Formulario'));
    const successMessage = screen.getByText('Formulario enviado con éxito.');
    expect(successMessage).not.toBeNull();
  });

  it('limpia los campos después de enviar el formulario correctamente', () => {
    render(<Contacto />);
    const nombreInput = screen.getByPlaceholderText('Ingresa tu nombre completo');
    const correoInput = screen.getByPlaceholderText('Ingresa tu correo');
    const mensajeInput = screen.getByPlaceholderText('Escribe tu mensaje');

    fireEvent.change(nombreInput, { target: { value: 'Juan Pérez' } });
    fireEvent.change(correoInput, { target: { value: 'juan@gmail.com' } });
    fireEvent.change(mensajeInput, { target: { value: 'Hola, este es un mensaje.' } });
    fireEvent.click(screen.getByText('Enviar Formulario'));

    expect(nombreInput.value).toBe('');
    expect(correoInput.value).toBe('');
    expect(mensajeInput.value).toBe('');
  });
});