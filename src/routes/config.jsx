import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Home from '../pages/home';
import Products from '../pages/productos';
import ProductDetails from '../pages/productDetails';
import Login from '../pages/auth/login';
import CreateUser from '../pages/auth/create-user';
import Blog from '../pages/blog';
import Contacto from '../pages/contacto';
import Nosotros from '../pages/nosotros';
import AdminDashboard from '../pages/Admin/AdminDashboard';

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