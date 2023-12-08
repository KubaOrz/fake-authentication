import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../auth/auth";

const navStyle = {
  backgroundColor: "#333",
  padding: "10px",
  color: "#fff",
  textAlign: "center",
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const linkStyle = {
  marginRight: "15px",
  color: "#fff",
  textDecoration: "none",
};

const buttonStyle = {
  padding: "8px 15px",
  background: "#555",
  border: "none",
  borderRadius: "5px",
  color: "#fff",
  cursor: "pointer",
};

const Layout = () => {
  const navigate = useNavigate()
  const logout = () => {
    AuthProvider.signOut(() => {
        navigate('/')
    })
  }

  return (
    <div>
      <nav style={navStyle}>
        <div style={{ display: "inline-block" }}>
            <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={{ display: "inline-block" }}>
                <Link to="/" style={linkStyle}>
                Home
                </Link>
            </li>
            <li style={{ display: "inline-block" }}>
                <Link to="/about" style={linkStyle}>
                About
                </Link>
            </li>
            <li style={{ display: "inline-block" }}>
                <Link to="/private/first" style={linkStyle}>
                Private
                </Link>
            </li>
            </ul>
        </div>
        <div style={{ display: 'inline-block' }}>
          {AuthProvider.authenticated ? (
            <>
              <span style={{ marginRight: "10px" }}>
                Witaj {AuthProvider.username}
              </span>
              <button 
                style={buttonStyle}
                onClick={logout}
              >
                Wyloguj
              </button>
            </>
          ) : (
            <button style={buttonStyle} onClick={() => navigate('login')}>
                Zaloguj się
            </button>
          )}
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
