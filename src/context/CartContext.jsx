import { createContext, useContext, useState, useMemo, useEffect } from 'react';

const CartContext = createContext();

const fetchProductsByIds = async (ids) => {
  if (ids.length === 0) return [];
  const responses = await Promise.all(
    ids.map(id => fetch(`https://demo-vinilos.onrender.com/api/productos/${id}`))
  );
  const products = await Promise.all(
    responses.map(res => res.json())
  );
  return products;
};

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const loadCartProducts = async () => {
      const productIds = cart.map(item => item.id);
      if (productIds.length === 0) {
        setCartProducts([]);
        return;
      }
      try {
        const products = await fetchProductsByIds(productIds);
        const productsWithQuantity = products.map(product => {
          const cartItem = cart.find(item => item.id === product.id);
          return { ...product, quantity: cartItem.quantity };
        });
        setCartProducts(productsWithQuantity);
      } catch (error) {
        console.error('Error al cargar productos del carrito:', error);
        setCart([]);
        setCartProducts([]);
      }
    };

    loadCartProducts();
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { id: product.id, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const total = useMemo(() => {
    return cartProducts.reduce((sum, item) => sum + (item.precio || 0) * item.quantity, 0);
  }, [cartProducts]);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart, 
        cartProducts,
        addToCart,
        removeFromCart,
        clearCart,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider');
  }
  return context;
}