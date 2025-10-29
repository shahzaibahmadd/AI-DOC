import { useRouter } from "next/router";
import { removeToken } from "../lib/auth";

export default function LoggedInNavbar() {
  const router = useRouter();

  const logout = () => {
    removeToken();
    router.push("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">AI Document Guide</h1>
      </div>
      <div className="navbar-right">
        <a href="/dashboard" className="nav-link">Dashboard</a>
        <a href="/chat" className="nav-link">Chat</a>
        <button onClick={logout} className="btn-logout">Logout</button>
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
          align-items: center;
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
        .btn-logout {
          background: #dc2626;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          color: white;
          transition: background 0.2s;
        }
        .btn-logout:hover {
          background: #b91c1c;
        }
      `}</style>
    </nav>
  );
}
