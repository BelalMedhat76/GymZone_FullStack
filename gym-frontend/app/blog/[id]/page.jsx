'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function BlogDetail() {
  const { id } = useParams(); // Get blog post ID from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return; // Prevent unnecessary requests

    fetch(`http://127.0.0.1:8000/api/blog/${id}/`) // Fetch blog post by ID
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch blog post');
        }
        return res.json();
      })
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!blog) return <p className="text-center">No blog post found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-4">{blog.created_at}</p>
      <img
        src={blog.image} // Assuming your API returns an 'image' field
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-lg">{blog.content}</p>
    </div>
  );
}
