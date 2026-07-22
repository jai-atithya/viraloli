import React, { useState, useEffect } from "react";
import api from "../../../api/axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      const response = await api.post("/auth/login", {
        email,
        password,
      });
      window.location.href = "/profile";
    } catch (error) {
      setError(error.response.data.data.message);
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_BASE_URL}/auth/google?flow=login`;
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-semibold text-slate-800">Login</h1>
      <div className="w-full max-w-sm flex flex-col gap-[1rem]">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error && <div>{error}</div>}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full rounded-md bg-blue-600 py-3 text-white font-medium hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-300"></div>
          <span className="text-sm text-slate-500">OR</span>
          <div className="h-px flex-1 bg-slate-300"></div>
        </div>

        <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-3 rounded-md border border-slate-300 bg-white py-3 font-medium hover:bg-slate-100 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-5 h-5"
          >
            <path
              fill="#FFC107"
              d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.2-.1-2.3-.4-3.5z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.7l6.6 4.8C14.7 15.3 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.2 0 10-2 13.6-5.3l-6.3-5.2C29.3 35.1 26.8 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.4 5.6-6.6 7.1l6.3 5.2C40.7 36.6 44 30.8 44 24c0-1.2-.1-2.3-.4-3.5z"
            />
          </svg>

          Continue with Google
        </button>
      </div>
    </div>
  );
};