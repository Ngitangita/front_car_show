import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
  const [type, setType] = useState("userIconSingin");
  const navigate = useNavigate();
  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(users),
      });
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(users),
      });
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow-md rounded-lg mt-5">
      <div className="text-center py-6">
        <div className="mb-4">
          {type === "userIconSingin" ? (
            <svg
              className="w-10 h-10 text-gray-500 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A10.001 10.001 0 0112 3c2.796 0 5.356 1.118 7.071 2.933m-1.414 1.414A7.967 7.967 0 0012 5a7.967 7.967 0 00-5.657 2.343M3 3l18 18"
              />
            </svg>
          ) : (
            <svg
              className="w-10 h-10 text-gray-500 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7M5 13H4a1 1 0 01-1-1v-1m0-4V7a1 1 0 011-1h1m0 0L5 4M4 13h1m0 0l-1-1m1 0h.01"
              />
            </svg>
          )}
        </div>
        <h2 className="text-xl font-semibold text-gray-700">Register</h2>
      </div>
      <div>
        <div className="flex justify-around mb-4">
          <button
            className={`px-4 py-2 rounded-lg ${
              type === "userIconSingin" ? "bg-gray-800 text-white" : "bg-gray-200"
            }`}
            onClick={() => setType("userIconSingin")}
          >
            Sign In
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              type === "userIconSingUp" ? "bg-gray-800 text-white" : "bg-gray-200"
            }`}
            onClick={() => setType("userIconSingUp")}
          >
            Sign Up
          </button>
        </div>
        {type === "userIconSingin" ? (
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-gray-700">Your Email</label>
              <input
                name="email"
                type="email"
                placeholder="name@mail.com"
                className="px-4 py-2 border rounded-lg"
                onChange={onChangeData}
                value={users.email}
              />
              <label className="text-gray-700">Password</label>
              <input
                name="password"
                type="password"
                placeholder="********"
                className="px-4 py-2 border rounded-lg"
                onChange={onChangeData}
                value={users.password}
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
              />
              <label htmlFor="terms" className="text-gray-700">
                I agree to the <a href="#" className="text-blue-500">Terms and Conditions</a>
              </label>
            </div>
            <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
              Sign In
            </button>
          </form>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={onSubmitData}>
            <div className="flex flex-col gap-2">
              <label className="text-gray-700">Your Name</label>
              <input
                name="name"
                type="text"
                placeholder="your name"
                className="px-4 py-2 border rounded-lg"
                onChange={onChangeData}
                value={users.name}
              />
              <label className="text-gray-700">Your Email</label>
              <input
                name="email"
                type="email"
                placeholder="name@mail.com"
                className="px-4 py-2 border rounded-lg"
                onChange={onChangeData}
                value={users.email}
              />
              <label className="text-gray-700">Password</label>
              <input
                name="password"
                type="password"
                placeholder="********"
                className="px-4 py-2 border rounded-lg"
                onChange={onChangeData}
                value={users.password}
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
              />
              <label htmlFor="terms" className="text-gray-700">
                I agree to the <a href="#" className="text-blue-500">Terms and Conditions</a>
              </label>
            </div>
            <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
