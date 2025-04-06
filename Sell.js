import React, { useState } from 'react';
import { FaBolt, FaPlus, FaChartLine, FaHistory } from 'react-icons/fa';

const Sell = () => {
  // Dummy data for current listings
  const [listings, setListings] = useState([
    {
      id: 1,
      type: "Solar",
      amount: 200,
      price: 8.5,
      location: "Mumbai, Maharashtra",
      status: "Active",
      date: "2024-03-15",
      views: 45,
      inquiries: 3
    },
    {
      id: 2,
      type: "Wind",
      amount: 150,
      price: 7.8,
      location: "Chennai, Tamil Nadu",
      status: "Active",
      date: "2024-03-14",
      views: 32,
      inquiries: 2
    }
  ]);

  // Dummy data for market trends
  const marketTrends = [
    { date: "2024-03-10", price: 8.2 },
    { date: "2024-03-11", price: 8.4 },
    { date: "2024-03-12", price: 8.1 },
    { date: "2024-03-13", price: 8.6 },
    { date: "2024-03-14", price: 8.3 },
    { date: "2024-03-15", price: 8.5 }
  ];

  const [showNewListingForm, setShowNewListingForm] = useState(false);
  const [newListing, setNewListing] = useState({
    type: "Solar",
    amount: "",
    price: "",
    location: ""
  });

  const handleCreateListing = (e) => {
    e.preventDefault();
    const listing = {
      id: listings.length + 1,
      ...newListing,
      status: "Active",
      date: new Date().toISOString().split('T')[0],
      views: 0,
      inquiries: 0
    };
    setListings([...listings, listing]);
    setShowNewListingForm(false);
    setNewListing({
      type: "Solar",
      amount: "",
      price: "",
      location: ""
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Sell Energy</h1>
        <button
          onClick={() => setShowNewListingForm(true)}
          className="bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-emerald-700 transition-colors"
        >
          <FaPlus /> Create New Listing
        </button>
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-100 p-3 rounded-full">
              <FaChartLine className="text-emerald-600 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Average Market Price</p>
              <p className="text-2xl font-bold text-gray-800">₹8.5/kWh</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-100 p-3 rounded-full">
              <FaBolt className="text-emerald-600 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Listed Energy</p>
              <p className="text-2xl font-bold text-gray-800">350 kWh</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-100 p-3 rounded-full">
              <FaHistory className="text-emerald-600 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Listings</p>
              <p className="text-2xl font-bold text-gray-800">2</p>
            </div>
          </div>
        </div>
      </div>

      {/* Current Listings */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Your Current Listings</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inquiries</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {listings.map(listing => (
                <tr key={listing.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{listing.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{listing.amount} kWh</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹{listing.price}/kWh</td>
                  <td className="px-6 py-4 whitespace-nowrap">{listing.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {listing.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{listing.views}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{listing.inquiries}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Listing Form Modal */}
      {showNewListingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Create New Listing</h2>
            <form onSubmit={handleCreateListing}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Energy Type
                  </label>
                  <select
                    value={newListing.type}
                    onChange={(e) => setNewListing({ ...newListing, type: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="Solar">Solar</option>
                    <option value="Wind">Wind</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amount (kWh)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={newListing.amount}
                    onChange={(e) => setNewListing({ ...newListing, amount: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price per kWh (₹)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={newListing.price}
                    onChange={(e) => setNewListing({ ...newListing, price: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={newListing.location}
                    onChange={(e) => setNewListing({ ...newListing, location: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  type="submit"
                  className="flex-1 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Create Listing
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowNewListingForm(false);
                    setNewListing({
                      type: "Solar",
                      amount: "",
                      price: "",
                      location: ""
                    });
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

export default Sell; 