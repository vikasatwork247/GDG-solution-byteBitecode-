import React from 'react';
import { FaUser, FaBolt, FaWallet } from 'react-icons/fa';

const Sidebar = () => {
  // Dummy user data
  const userData = {
    name: "John Doe",
    phone: "+91 9885902772",
    energyCredits: 150,
    walletBalance: 2500
  };

  return (
    <div className="bg-white w-64 min-h-screen p-4 shadow-lg">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-emerald-100 p-3 rounded-full">
          <FaUser className="text-emerald-600 text-xl" />
        </div>
        <div>
          <h3 className="font-semibold">{userData.name}</h3>
          <p className="text-sm text-gray-600">{userData.phone}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-emerald-50 p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <FaBolt className="text-emerald-600" />
            <div>
              <p className="text-sm text-gray-600">Energy Credits</p>
              <p className="font-semibold">{userData.energyCredits} kWh</p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <FaWallet className="text-emerald-600" />
            <div>
              <p className="text-sm text-gray-600">Wallet Balance</p>
              <p className="font-semibold">₹{userData.walletBalance}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 