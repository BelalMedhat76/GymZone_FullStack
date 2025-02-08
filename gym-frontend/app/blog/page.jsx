"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/blog/")
      .then((response) => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setError("Failed to load blog posts. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-center text-lg py-6">Loading blog posts...</p>;
  if (error) return <p className="text-center text-red-500 py-6">{error}</p>;

  return (
    <section id="blog" className="py-12 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mt-[60px] mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Latest Blog Posts 📝
        </h2>

        {blogs.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">
            No blog posts available.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post) => (
              <motion.div
                key={post.id}
                className="bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-60 rounded-lg object-cover"
                />
                <div className="p-4 flex flex-col justify-start items-start ">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {post.description
                      ? post.description.slice(0, 100)
                      : "No description available"}
                    ...
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-indigo-600 dark:text-indigo-400 font-semibold mt-4 inline-block hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;
