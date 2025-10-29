import { useEffect } from "react";
import { useRouter } from "next/router";
import { isLoggedIn, removeToken } from "../lib/auth";
import LoggedInNavbar from "../components/LoggedInNavbar";


export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    }
  }, []);

  const logout = () => {
    removeToken();
    router.push("/login");
  };

  return (
    <>
          <LoggedInNavbar />
      <div className="dashboard">
        <div className="dashboard-container">
          <h1 className="title">Welcome to Dashboard 🎉</h1>
          <p className="subtitle">You are successfully logged in.</p>
          <button onClick={logout} className="btn btn-red">
            Logout
          </button>
        </div>

        <style jsx>{`
          .dashboard {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 90vh;
            background: #f5f5f5;
          }

          .dashboard-container {
            background: white;
            padding: 3rem;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            text-align: center;
            width: 400px;
          }

          .title {
            font-size: 1.8rem;
            font-weight: bold;
            margin-bottom: 1rem;
            color: #333;
          }

          .subtitle {
            font-size: 1rem;
            margin-bottom: 2rem;
            color: #555;
          }

          .btn {
            width: 100%;
            padding: 0.75rem;
            border-radius: 6px;
            font-size: 1rem;
            font-weight: 500;
            border: none;
            cursor: pointer;
            transition: background 0.2s;
            color: white;
          }

          .btn-red {
            background: #dc2626;
          }
          .btn-red:hover {
            background: #b91c1c;
          }
        `}</style>
      </div>
         </>
   
  );
}
