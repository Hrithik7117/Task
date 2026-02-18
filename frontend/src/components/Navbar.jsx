import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold">
        Task Manager
      </Link>

      <div className="space-x-4">
        {!token ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </div>
  );
}
