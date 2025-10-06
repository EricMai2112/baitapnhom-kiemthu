import React from "react";

export default function CartItem({ item, onEdit, onDelete }) {
  return (
    <div className="flex justify-between items-center bg-gray-50 border rounded-lg p-3 shadow-sm">
      <span className="text-gray-700">
        {item.name} - {item.qty} cái
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(item.id)}
          className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        >
          Sửa
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Xóa
        </button>
      </div>
    </div>
  );
}
