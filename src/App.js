import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import './App.css';
import Layout from './pages/Layout';
import About from './pages/About';
import Private from './pages/Private'
import Login from './pages/Login';
import PrivateRoute from './auth/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="about" element={<About/>}/>
          <Route path="private" element={
            <PrivateRoute>
              <Outlet />
            </PrivateRoute>
          }>
            <Route path="first" element={<Private />} />
          </Route>
        </Route>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
