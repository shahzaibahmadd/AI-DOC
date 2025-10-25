import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import api from "../lib/api";
import { setToken } from "../lib/auth";
import { useRouter } from "next/router";


export default function Login() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/auth/login", data);
      setToken(res.data.token);
      router.push("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <>
      <Navbar />
    <div className="page">
      <div className="form-container">
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="input"
          />
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="input"
          />
          <button type="submit" className="btn">Login</button>
        </form>
      </div>

      <style jsx>{`
        .page {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: #f5f5f5;
        }

        .form-container {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          width: 350px;
          text-align: center;
        }

        .form-title {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          color: #333;
        }

        .input {
          width: 100%;
          padding: 0.75rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
        }

        .input:focus {
          border-color: #0070f3;
          outline: none;
        }

        .btn {
          width: 100%;
          padding: 0.75rem;
          background: #28a745;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s;
        }

        .btn:hover {
          background: #218838;
        }
      `}</style>
    </div>
        </>

  );
}
