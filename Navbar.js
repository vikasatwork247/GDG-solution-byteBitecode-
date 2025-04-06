import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaChartBar, FaShoppingCart, FaStore, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    return location.pathname === path ? 'bg-emerald-700' : '';
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav className="bg-emerald-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">GridShare</div>
        <div className="flex space-x-4">
          <Link
            to="/dashboard"
            className={`px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2 ${isActive('/dashboard')}`}
          >
            <FaHome /> Home
          </Link>
          <Link
            to="/status"
            className={`px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2 ${isActive('/status')}`}
          >
            <FaChartBar /> Status
          </Link>
          <Link
            to="/buy"
            className={`px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2 ${isActive('/buy')}`}
          >
            <FaShoppingCart /> Buy
          </Link>
          <Link
            to="/sell"
            className={`px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2 ${isActive('/sell')}`}
          >
            <FaStore /> Sell
          </Link>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2"
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 