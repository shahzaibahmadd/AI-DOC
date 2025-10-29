import { useForm } from "react-hook-form";
import api from "../lib/api";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      await api.post("/auth/register", data);
      alert("Registration successful! Please login.");
      router.push("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div className="page">
        <div className="form-container">
          <h2 className="form-title">Register</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name")}
              placeholder="Name"
              className="input"
            />
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
            <button type="submit" className="btn">Register</button>
          </form>
        </div>

        <style jsx>{`
          .page {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 90vh;
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
            background: #0070f3;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.2s;
          }

          .btn:hover {
            background: #005bb5;
          }
        `}</style>
      </div>
    </>
  );
}
