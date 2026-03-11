"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Review {
  id: string;
  name: string;
  country: string;
  image: string;
  review: string;
  rating: number;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: number;
}

export default function AdminPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });

  const adminSecret = typeof window !== 'undefined' ? localStorage.getItem('adminSecret') : null;

  useEffect(() => {
    if (adminSecret) {
      setIsAuthenticated(true);
      fetchReviews(adminSecret);
    }
  }, [adminSecret]);

  useEffect(() => {
    filterReviews();
  }, [reviews, statusFilter, searchQuery]);

  const fetchReviews = async (secret: string) => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      if (statusFilter !== 'all') params.append('status', statusFilter);
      if (searchQuery) params.append('search', searchQuery);

      const response = await fetch(`/api/admin/reviews?${params}`, {
        headers: {
          'Authorization': `Bearer ${secret}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setReviews(data.reviews || []);
      } else {
        setMessage({ type: 'error', text: 'Failed to fetch reviews' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error fetching reviews' });
    } finally {
      setIsLoading(false);
    }
  };

  const filterReviews = () => {
    let filtered = reviews;

    if (statusFilter !== 'all') {
      filtered = filtered.filter(r => r.status === statusFilter);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(r => 
        r.name.toLowerCase().includes(query) ||
        r.country.toLowerCase().includes(query) ||
        r.review.toLowerCase().includes(query)
      );
    }

    setFilteredReviews(filtered);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password) {
      localStorage.setItem('adminSecret', password);
      setIsAuthenticated(true);
      fetchReviews(password);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminSecret');
    setIsAuthenticated(false);
    setReviews([]);
    setPassword("");
  };

  const handleStatusChange = async (reviewId: string, newStatus: 'approved' | 'rejected' | 'pending') => {
    const secret = localStorage.getItem('adminSecret');
    if (!secret) return;

    try {
      const response = await fetch('/api/admin/reviews', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${secret}`,
        },
        body: JSON.stringify({ reviewId, status: newStatus }),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: `Review ${newStatus} successfully!` });
        fetchReviews(secret);
        setTimeout(() => setMessage({ type: '', text: '' }), 3000);
      } else {
        setMessage({ type: 'error', text: 'Failed to update review status' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error updating review status' });
    }
  };

  const handleDelete = async (reviewId: string) => {
    if (!confirm('Are you sure you want to delete this review?')) return;

    const secret = localStorage.getItem('adminSecret');
    if (!secret) return;

    try {
      const response = await fetch(`/api/admin/reviews?reviewId=${reviewId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${secret}`,
        },
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Review deleted successfully!' });
        fetchReviews(secret);
        setTimeout(() => setMessage({ type: '', text: '' }), 3000);
      } else {
        setMessage({ type: 'error', text: 'Failed to delete review' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error deleting review' });
    }
  };

  const getStatusCounts = () => {
    return {
      all: reviews.length,
      pending: reviews.filter(r => r.status === 'pending').length,
      approved: reviews.filter(r => r.status === 'approved').length,
      rejected: reviews.filter(r => r.status === 'rejected').length,
    };
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-yellow-600 to-green-600 bg-clip-text text-transparent mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-600">Enter your admin password to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 via-yellow-600 to-green-600 text-white py-3 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const statusCounts = getStatusCounts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-yellow-600 to-green-600 bg-clip-text text-transparent">
              Review Management Dashboard
            </h1>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Message */}
        {message.text && (
          <div className={`mb-6 p-4 rounded-lg ${
            message.type === 'success' 
              ? 'bg-green-50 text-green-700 border border-green-200' 
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            {message.text}
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'All Reviews', count: statusCounts.all, color: 'from-blue-500 to-blue-600', status: 'all' },
            { label: 'Pending', count: statusCounts.pending, color: 'from-yellow-500 to-yellow-600', status: 'pending' },
            { label: 'Approved', count: statusCounts.approved, color: 'from-green-500 to-green-600', status: 'approved' },
            { label: 'Rejected', count: statusCounts.rejected, color: 'from-red-500 to-red-600', status: 'rejected' },
          ].map((stat) => (
            <button
              key={stat.status}
              onClick={() => setStatusFilter(stat.status)}
              className={`bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:scale-105 ${
                statusFilter === stat.status ? 'ring-4 ring-blue-300' : ''
              }`}
            >
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.count}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </button>
          ))}
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by name, country, or review..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setStatusFilter('all');
              }}
              className="px-6 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Reviews List */}
        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
            <p className="mt-4 text-gray-600">Loading reviews...</p>
          </div>
        ) : filteredReviews.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <p className="text-gray-500 text-lg">No reviews found</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Customer Image */}
                  <div className="flex-shrink-0">
                    <div className="relative w-24 h-24 mx-auto md:mx-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-yellow-500 to-green-500 rounded-full animate-pulse"></div>
                      <div className="absolute inset-1 bg-white rounded-full overflow-hidden">
                        <Image
                          src={review.image}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{review.name}</h3>
                        <p className="text-gray-600">{review.country}</p>
                        <div className="flex gap-1 mt-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-500 text-lg">⭐</span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 md:mt-0">
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                          review.status === 'approved' ? 'bg-green-100 text-green-700' :
                          review.status === 'rejected' ? 'bg-red-100 text-red-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 italic">"{review.review}"</p>

                    <div className="text-sm text-gray-500 mb-4">
                      Submitted: {new Date(review.createdAt).toLocaleDateString()} at {new Date(review.createdAt).toLocaleTimeString()}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {review.status !== 'approved' && (
                        <button
                          onClick={() => handleStatusChange(review.id, 'approved')}
                          className="px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
                        >
                          ✓ Approve
                        </button>
                      )}
                      {review.status !== 'rejected' && (
                        <button
                          onClick={() => handleStatusChange(review.id, 'rejected')}
                          className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
                        >
                          ✗ Reject
                        </button>
                      )}
                      {review.status !== 'pending' && (
                        <button
                          onClick={() => handleStatusChange(review.id, 'pending')}
                          className="px-6 py-2 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
                        >
                          ⟲ Set Pending
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(review.id)}
                        className="px-6 py-2 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                      >
                        🗑 Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
