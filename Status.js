import React from 'react';
import { FaBolt, FaChartLine, FaHistory, FaCalendar } from 'react-icons/fa';

const Status = () => {
  // Dummy data for status page
  const statusData = {
    monthlyUsage: {
      current: 450,
      previous: 380,
      change: 18.4
    },
    energyBalance: {
      available: 150,
      reserved: 50,
      total: 200
    },
    transactions: [
      {
        id: 1,
        type: 'buy',
        amount: 100,
        price: 8.5,
        date: '2024-03-19',
        status: 'completed'
      },
      {
        id: 2,
        type: 'sell',
        amount: 50,
        price: 8.7,
        date: '2024-03-18',
        status: 'completed'
      },
      {
        id: 3,
        type: 'buy',
        amount: 75,
        price: 8.3,
        date: '2024-03-17',
        status: 'completed'
      }
    ],
    priceHistory: [
      { date: '2024-03-19', price: 8.5 },
      { date: '2024-03-18', price: 8.7 },
      { date: '2024-03-17', price: 8.3 },
      { date: '2024-03-16', price: 8.4 },
      { date: '2024-03-15', price: 8.6 }
    ]
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Energy Status</h1>

      {/* Monthly Usage Card */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Monthly Usage</h2>
            <p className="text-3xl font-bold text-emerald-600">{statusData.monthlyUsage.current} kWh</p>
            <div className="flex items-center mt-2">
              <span className={`${statusData.monthlyUsage.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {statusData.monthlyUsage.change >= 0 ? '↑' : '↓'} {Math.abs(statusData.monthlyUsage.change)}%
              </span>
              <span className="text-sm text-gray-500 ml-2">vs last month</span>
            </div>
          </div>
          <FaChartLine className="text-4xl text-emerald-500" />
        </div>
      </div>

      {/* Energy Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Available Energy</h3>
              <p className="text-2xl font-bold text-emerald-600">{statusData.energyBalance.available} kWh</p>
            </div>
            <FaBolt className="text-3xl text-emerald-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Reserved Energy</h3>
              <p className="text-2xl font-bold text-emerald-600">{statusData.energyBalance.reserved} kWh</p>
            </div>
            <FaBolt className="text-3xl text-emerald-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Total Energy</h3>
              <p className="text-2xl font-bold text-emerald-600">{statusData.energyBalance.total} kWh</p>
            </div>
            <FaBolt className="text-3xl text-emerald-500" />
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Transaction History</h2>
          <FaHistory className="text-emerald-500" />
        </div>
        <div className="space-y-4">
          {statusData.transactions.map(transaction => (
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

      {/* Price History */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Price History</h2>
          <FaCalendar className="text-emerald-500" />
        </div>
        <div className="space-y-4">
          {statusData.priceHistory.map((price, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b">
              <p className="text-gray-600">{price.date}</p>
              <p className="font-medium">₹{price.price}/kWh</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status; 