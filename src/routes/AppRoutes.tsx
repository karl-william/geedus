import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import Dashboard from '../pages/Dashboard/Dashboard';
import WordCloudGenerator from '../pages/Resources/WordCloudGenerator';
import WhiteboardEditor from '../pages/Whiteboard/WhiteboardEditor';
import Profile from '../pages/Settings/Profile';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />

      {/* Protected routes */}
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/resources/word-cloud" element={<PrivateRoute><WordCloudGenerator /></PrivateRoute>} />
      <Route path="/whiteboard" element={<PrivateRoute><WhiteboardEditor /></PrivateRoute>} />
      <Route path="/settings/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />

      {/* 404 route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
