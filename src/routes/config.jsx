import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Home from '../pages/home.jsx';
import Products from '../pages/productos.jsx';
import ProductDetails from '../pages/productDetails.jsx';
import Login from '../pages/auth/login.jsx';
import CreateUser from '../pages/auth/CreateUser.jsx';
import Blog from '../pages/blog.jsx';
import Contacto from '../pages/contacto.jsx';
import Nosotros from '../pages/nosotros.jsx';
import AdminDashboard from '../pages/Admin/AdminDashboard.jsx';

const ProtectedRoute = ({ children, adminOnly = false }) => {
    const { user, isAdmin, loading } = useAuth();

    if (loading) return <p>Cargando...</p>;

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (adminOnly && !isAdmin) {
        return <Navigate to="/" replace />;
    }

    return children;
};

const RoutesConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/productos/:id" element={<ProductDetails />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<CreateUser />} />
            <Route path="/admin/AdminDashboard" element={
                <ProtectedRoute adminOnly={true}>
                    <AdminDashboard />
                </ProtectedRoute>
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default RoutesConfig;