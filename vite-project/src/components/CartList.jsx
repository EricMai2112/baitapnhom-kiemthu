import React, { useState } from "react";
import CartItem from "./CartItem";

export default function CartList() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");

  const addItem = () => {
    if (!name || !qty) return alert("Điền đủ thông tin");
    setItems([...items, { id: Date.now(), name, qty }]);
    setName("");
    setQty("");
  };

  const editItem = (id) => {
    const newName = prompt("Nhập tên mới:");
    const newQty = prompt("Nhập số lượng mới:");
    if (newName && newQty) {
      setItems(
        items.map((i) =>
          i.id === id ? { ...i, name: newName, qty: newQty } : i
        )
      );
    }
  };

  const deleteItem = (id) => setItems(items.filter((i) => i.id !== id));

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg">
      <h2 className="text-2xl font-bold text-center mb-4 text-purple-600">
        Giỏ hàng
      </h2>

      <div className="flex gap-2 mb-4">
        <input
          id="product-name"
          className="flex-1 border rounded-lg p-2"
          placeholder="Tên sản phẩm"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          id="product-qty"
          className="w-24 border rounded-lg p-2"
          placeholder="SL"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
        <button
          id="add-btn"
          onClick={addItem}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Thêm
        </button>
      </div>

      <div className="space-y-2">
        {items.length === 0 ? (
          <p className="text-gray-500 text-center">Chưa có sản phẩm</p>
        ) : (
          items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onEdit={editItem}
              onDelete={deleteItem}
            />
          ))
        )}
      </div>
    </div>
  );
}
