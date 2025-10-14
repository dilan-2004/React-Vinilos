import React from 'react';
import { render, screen } from '@testing-library/react';
import Blog from '../../pages/blog';

describe('Blog Page', () => {
  it('renderiza el título de la página', () => {
    render(<Blog />);
    const title = screen.getByText('NOTICIAS IMPORTANTES');
    expect(title).not.toBeNull();
    expect(title.tagName).toBe('H1');
  });

  it('renderiza la primera tarjeta correctamente', () => {
    render(<Blog />);
    const cardTitle = screen.getByText('The Marshall Mathers LP": El vinilo que marcó una generación');
    expect(cardTitle).not.toBeNull();
    const cardImage = screen.getByAltText('imagenNoticia');
    expect(cardImage).not.toBeNull();
    expect(cardImage.getAttribute('src')).toBe('https://cdn-images.dzcdn.net/images/cover/941c2d3c366affdc662956559e078a4e/0x1900-000000-80-0-0.jpg');
  });

  it('renderiza la segunda tarjeta correctamente', () => {
    render(<Blog />);
    const cardTitle = screen.getByText('"Nebraska \'82: Expanded Edition": El espíritu de Springsteen en vinilo');
    expect(cardTitle).not.toBeNull();
    const cardImage = screen.getByAltText('Bruce Springsteen Nebraska 82 Expanded Edition');
    expect(cardImage).not.toBeNull();
    expect(cardImage.getAttribute('src')).toBe('https://www.ruta66.es/wp-content/uploads/2025/09/bruce-nebraska-82-380x250.jpg'); 
  });

  it('verifica que el contenedor principal tenga las clases de Bootstrap', () => {
    render(<Blog />);
    const container = screen.getByText('NOTICIAS IMPORTANTES').closest('div');
    expect(container).not.toBeNull();
    expect(container).toHaveClass('container');
    expect(container).toHaveClass('my-5');
  });
});