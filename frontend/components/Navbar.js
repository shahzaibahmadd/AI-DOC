export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">AI Document Guide</h1>
      </div>
      <div className="navbar-right">
        <a href="/login" className="nav-link">Login</a>
        <a href="/register" className="nav-link">Register</a>
      </div>

      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: #171717;
          color: white;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .navbar-right {
          display: flex;
          gap: 1rem;
        }
        .nav-link {
          background: #0070f3;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          color: white;
          text-decoration: none;
          transition: background 0.2s;
        }
        .nav-link:hover {
          background: #0059c1;
        }
      `}</style>
    </nav>
  );
}
