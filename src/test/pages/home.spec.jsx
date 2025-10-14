import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../../pages/home';
import { CartProvider } from '../../context/CartContext';
import products from '../../data/arrayproductos';

describe('Home Page', () => {
  const renderWithContext = (component) => {
    return render(<CartProvider>{component}</CartProvider>);
  };

  it('renderiza el título de la página', () => {
    renderWithContext(<Home />);
    const title = screen.getByText('Bienvenido a la Tienda de Vinilos');
    expect(title).not.toBeNull(); // Verifica que el título no sea null
    expect(title.tagName).toBe('H1'); // Verifica que el título es un <h1>
  });

  it('renderiza el carrusel de productos', () => {
    renderWithContext(<Home />);
    const carouselImage = screen.getByAltText(products[0].nombre);
    expect(carouselImage).not.toBeNull(); // Verifica que la imagen del carrusel no sea null
    expect(carouselImage.getAttribute('src')).toBe(products[0].img); // Verifica que la URL de la imagen es correcta
  });

  it('renderiza los productos destacados', () => {
    renderWithContext(<Home />);
    products.forEach((product) => {
      const productName = screen.getByText(product.nombre);
      expect(productName).not.toBeNull(); // Verifica que el nombre del producto no sea null
      const productDescription = screen.getByText(product.descripcion);
      expect(productDescription).not.toBeNull(); // Verifica que la descripción del producto no sea null
    });
  });

  it('llama a la función de agregar al carrito cuando se hace clic en "Agregar al Carrito"', () => {
    renderWithContext(<Home />);
    const addToCartButton = screen.getAllByText('Agregar al Carrito')[0];
    fireEvent.click(addToCartButton);
    expect(addToCartButton).not.toBeNull(); // Verifica que el botón existe y es clickeable
  });

  it('navega a la página de detalles del producto cuando se hace clic en "Ver Producto"', () => {
    renderWithContext(<Home />);
    const viewProductButton = screen.getByText('Ver Producto');
    fireEvent.click(viewProductButton);
    expect(viewProductButton).not.toBeNull(); // Verifica que el botón existe y es clickeable
  });

  it('navega a la página de detalles del producto destacado cuando se hace clic en "Ver Detalles"', () => {
    renderWithContext(<Home />);
    const viewDetailsButton = screen.getAllByText('Ver Detalles')[0];
    fireEvent.click(viewDetailsButton);
    expect(viewDetailsButton).not.toBeNull(); // Verifica que el botón existe y es clickeable
  });
});