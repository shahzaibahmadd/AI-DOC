import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="home-container">
          <h1 className="title">AI Document Guide</h1>
          <p className="subtitle">
            A simple guide to help you with official documentation.
          </p>
          <div className="actions">
            <Link href="/register" className="btn btn-blue">
              Register
            </Link>
            <Link href="/login" className="btn btn-green">
              Login
            </Link>
          </div>
        </div>

        <style jsx>{`
          .home {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 90vh;
            background: #f5f5f5;
          }

          .home-container {
            background: white;
            padding: 3rem;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            text-align: center;
            max-width: 500px;
          }

          .title {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 1rem;
            color: #333;
          }

          .subtitle {
            font-size: 1.1rem;
            margin-bottom: 2rem;
            color: #555;
          }

          .actions {
            display: flex;
            justify-content: center;
            gap: 1rem;
          }

          .btn {
            padding: 0.75rem 1.5rem;
            border-radius: 6px;
            font-size: 1rem;
            font-weight: 500;
            color: white;
            text-decoration: none;
            transition: background 0.2s;
          }

          .btn-blue {
            background: #0070f3;
          }
          .btn-blue:hover {
            background: #005bb5;
          }

          .btn-green {
            background: #16a34a;
          }
          .btn-green:hover {
            background: #15803d;
          }
        `}</style>
      </div>
    </>
  );
}
