import React, { useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    gender: "",
    country: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setForm({ ...form, [id]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.username &&
      form.password &&
      form.gender &&
      form.country &&
      form.agree
    ) {
      alert("Đăng ký thành công!");
    } else {
      alert("Vui lòng điền đầy đủ thông tin!");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
        Đăng ký
      </h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          id="username"
          className="border rounded-lg p-2 w-full"
          placeholder="Tên người dùng"
          onChange={handleChange}
        />
        <input
          id="password"
          type="password"
          className="border rounded-lg p-2 w-full"
          placeholder="Mật khẩu"
          onChange={handleChange}
        />
        <select
          id="gender"
          className="border rounded-lg p-2 w-full"
          onChange={handleChange}
        >
          <option value="">-- Giới tính --</option>
          <option value="male">Nam</option>
          <option value="female">Nữ</option>
        </select>
        <select
          id="country"
          className="border rounded-lg p-2 w-full"
          onChange={handleChange}
        >
          <option value="">-- Quốc gia --</option>
          <option value="Vietnam">Việt Nam</option>
          <option value="USA">Mỹ</option>
        </select>
        <label className="flex items-center gap-2">
          <input id="agree" type="checkbox" onChange={handleChange} />
          <span>Đồng ý điều khoản</span>
        </label>
        <button
          id="submit"
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
}
