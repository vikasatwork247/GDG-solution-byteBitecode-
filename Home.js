import React from 'react';
import { FaBolt, FaChartLine, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Home = () => {
  // Dummy data
  const energyData = {
    currentPrice: 8.5,
    priceChange: 0.5,
    dailyUsage: 25,
    availableEnergy: 150,
    recentTransactions: [
      { id: 1, type: 'buy', amount: 50, price: 8.5, date: '2024-03-19' },
      { id: 2, type: 'sell', amount: 30, price: 8.7, date: '2024-03-18' },
      { id: 3, type: 'buy', amount: 20, price: 8.3, date: '2024-03-17' },
    ]
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
      
      {/* Energy Price Card */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Current Energy Price</h2>
            <p className="text-3xl font-bold text-emerald-600">₹{energyData.currentPrice}/kWh</p>
            <div className="flex items-center mt-2">
              {energyData.priceChange >= 0 ? (
                <FaArrowUp className="text-green-500 mr-1" />
              ) : (
                <FaArrowDown className="text-red-500 mr-1" />
              )}
              <span className={`${energyData.priceChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {Math.abs(energyData.priceChange)}%
              </span>
            </div>
          </div>
          <FaChartLine className="text-4xl text-emerald-500" />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Daily Usage</h3>
              <p className="text-2xl font-bold text-emerald-600">{energyData.dailyUsage} kWh</p>
            </div>
            <FaBolt className="text-3xl text-emerald-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Available Energy</h3>
              <p className="text-2xl font-bold text-emerald-600">{energyData.availableEnergy} kWh</p>
            </div>
            <FaBolt className="text-3xl text-emerald-500" />
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Transactions</h2>
        <div className="space-y-4">
          {energyData.recentTransactions.map(transaction => (
            <div key={transaction.id} className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium">
                  {transaction.type === 'buy' ? 'Bought' : 'Sold'} {transaction.amount} kWh
                </p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">₹{transaction.price}/kWh</p>
                <p className="text-sm text-gray-500">
                  Total: ₹{(transaction.amount * transaction.price).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; 