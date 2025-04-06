import React, { useState } from 'react';
import { FaBolt, FaSearch, FaFilter, FaSort } from 'react-icons/fa';

const Buy = () => {
  // Dummy data for available energy sellers
  const sellers = [
    {
      id: 1,
      name: "Solar Farm A",
      location: "Mumbai, Maharashtra",
      available: 500,
      price: 8.5,
      rating: 4.8,
      type: "Solar",
      reliability: 98,
      reviews: 156
    },
    {
      id: 2,
      name: "Wind Energy Co",
      location: "Chennai, Tamil Nadu",
      available: 300,
      price: 7.8,
      rating: 4.6,
      type: "Wind",
      reliability: 95,
      reviews: 89
    },
    {
      id: 3,
      name: "Green Power Solutions",
      location: "Bangalore, Karnataka",
      available: 750,
      price: 8.2,
      rating: 4.9,
      type: "Hybrid",
      reliability: 99,
      reviews: 234
    },
    {
      id: 4,
      name: "Eco Energy Hub",
      location: "Delhi, NCR",
      available: 400,
      price: 8.7,
      rating: 4.7,
      type: "Solar",
      reliability: 97,
      reviews: 112
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price');
  const [selectedSeller, setSelectedSeller] = useState(null);
  const [amount, setAmount] = useState('');
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);

  const handlePurchase = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to process the purchase
    alert(`Purchase successful! ${amount} kWh from ${selectedSeller.name}`);
    setShowPurchaseForm(false);
    setSelectedSeller(null);
    setAmount('');
  };

  const filteredSellers = sellers.filter(seller =>
    seller.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    seller.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedSellers = [...filteredSellers].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'reliability') return b.reliability - a.reliability;
    return 0;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Buy Energy</h1>

      {/* Search and Filter Section */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or location..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <select
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
              <option value="reliability">Sort by Reliability</option>
            </select>
          </div>
        </div>
      </div>

      {/* Sellers List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sortedSellers.map(seller => (
          <div key={seller.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{seller.name}</h3>
                <p className="text-gray-600">{seller.location}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-emerald-600">₹{seller.price}</p>
                <p className="text-sm text-gray-500">per kWh</p>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Available</p>
                <p className="font-medium">{seller.available} kWh</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Type</p>
                <p className="font-medium">{seller.type}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Rating</p>
                <p className="font-medium">{seller.rating} ⭐</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Reliability</p>
                <p className="font-medium">{seller.reliability}%</p>
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedSeller(seller);
                setShowPurchaseForm(true);
              }}
              className="mt-4 w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Purchase Energy
            </button>
          </div>
        ))}
      </div>

      {/* Purchase Form Modal */}
      {showPurchaseForm && selectedSeller && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Purchase Energy</h2>
            <form onSubmit={handlePurchase}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount (kWh)
                </label>
                <input
                  type="number"
                  min="1"
                  max={selectedSeller.available}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  Total Cost: ₹{(amount * selectedSeller.price).toFixed(2)}
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Confirm Purchase
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowPurchaseForm(false);
                    setSelectedSeller(null);
                    setAmount('');
                  }}
                  className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Buy; 