import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import NavBar from './components/organisms/navbar';
import Footer from './components/organisms/footer.jsx';
import Home from './pages/home.jsx';
import Products from './pages/productos.jsx';
import ProductDetails from './pages/productDetails.jsx';
import Login from './pages/auth/login.jsx';
import CreateUser from './pages/auth/CreateUser.jsx';
import Blog from './pages/blog.jsx';
import Contacto from './pages/contacto.jsx';
import Nosotros from './pages/nosotros.jsx';
import AdminDashboard from './pages/Admin/AdminDashboard.jsx';

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Cargando...</div>;

  if (user) {
    return <Navigate to={user.rol === 'ADMIN' ? '/admin/dashboard' : '/'} replace />;
  }
  return children;
};

const PrivateRoute = ({ children, adminOnly = false }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Cargando...</div>;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !(user?.rol === 'ADMIN' || user?.rol?.nombre === 'ADMIN')) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const LoginRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Cargando...</div>;

  if (user) {
    return <Navigate to={user.rol === 'ADMIN' ? '/admin/dashboard' : '/'} replace />;
  }

  return <Login />;
};

function AppContent() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginRoute />} />
        <Route path="/register" element={
          <PublicRoute>
            <CreateUser />
          </PublicRoute>
        } />
        <Route path="/" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path="/productos" element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        } />
        <Route path="/productos/:id" element={
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        } />
        <Route path="/blog" element={
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        } />
        <Route path="/contacto" element={
          <PrivateRoute>
            <Contacto />
          </PrivateRoute>
        } />
        <Route path="/nosotros" element={
          <PrivateRoute>
            <Nosotros />
          </PrivateRoute>
        } />
        <Route path="/admin/dashboard" element={
          <PrivateRoute adminOnly={true}>
            <AdminDashboard />
          </PrivateRoute>
        } />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
