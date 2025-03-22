import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import Dashboard from '../pages/Dashboard/Dashboard';
import WordCloudGenerator from '../pages/Resources/WordCloudGenerator';
import WhiteboardEditor from '../pages/Whiteboard/WhiteboardEditor';
import Profile from '../pages/Settings/Profile';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* These will be protected later */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/resources/word-cloud" element={<WordCloudGenerator />} />
      <Route path="/whiteboard" element={<WhiteboardEditor />} />
      <Route path="/settings/profile" element={<Profile />} />

      {/* 404 route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
