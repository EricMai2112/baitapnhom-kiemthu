import React, { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      alert("Đăng nhập thành công!");
      onLogin(username);
    } else {
      alert("Vui lòng nhập đầy đủ thông tin");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-center mb-4 text-green-600">
        Đăng nhập
      </h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          id="login-username"
          className="border rounded-lg p-2 w-full"
          placeholder="Tên đăng nhập"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          id="login-password"
          type="password"
          className="border rounded-lg p-2 w-full"
          placeholder="Mật khẩu"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          id="login-btn"
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
}
