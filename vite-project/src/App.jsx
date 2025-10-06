import React, { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import CartList from "./components/CartList";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      {!user ? (
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">
          <RegisterForm />
          <LoginForm onLogin={(username) => setUser(username)} />
        </div>
      ) : (
        <CartList />
      )}
    </div>
  );
}
