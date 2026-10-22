import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { LearningCenter, PillarDetail } from './pages/LearningCenter';
import { CourseView } from './pages/CourseView';
import { PlacementTest } from './pages/PlacementTest';
import { CredentialsVault } from './pages/CredentialsVault';

function AppLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/learn" element={<LearningCenter />} />
            <Route path="/learn/:pillarId" element={<PillarDetail />} />
            <Route path="/course/:courseId" element={<CourseView />} />
            <Route path="/placement" element={<PlacementTest />} />
            <Route path="/credentials" element={<CredentialsVault />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
