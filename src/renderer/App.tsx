import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import icon from '../../assets/icon.svg';
import './App.scss';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Champion from './pages/Champion/Champion';
import Overview from './pages/Champion/Overview';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/champion/:championName" element={<Champion />}>
            <Route path="/" element={<Overview />} />
            <Route path="/overview" element={<Champion />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
