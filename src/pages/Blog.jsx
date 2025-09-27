import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://thesecuremedia.com/blogs/wp-json/wp/v2/posts?_embed")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p className="text-center mt-16 text-gray-500 text-base" role="status" aria-live="polite">
        Loading blog posts...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center mt-16 text-red-600 font-semibold text-base" role="alert">
        Error loading posts: {error}
      </p>
    );
  }

  return (
    <>
      <Helmet>
        <title>Digital Tips and Solutions TheSecureMedia Blog</title>
        <meta name="description" content="Explore TheSecureMedia Blog for expert tips and solutions to your digital and media challenges. Get answers to real user questions now." />
        <link rel="canonical" href="https://thesecuremedia.com/blog" />
      </Helmet>
      <main className="max-w-5xl mx-auto px-4 py-12 font-sans">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900 tracking-tight">Our Blog</h1>

        {posts.length === 0 ? (
          <p className="text-center text-gray-500 text-base mt-20">No blog posts found.</p>
        ) : (
          <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" aria-label="Blog posts">
            {posts.map((post) => {
              const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

              return (
                <motion.article
                  key={post.id}
                  whileHover={{ scale: 1.02, boxShadow: "0 6px 14px rgba(0,0,0,0.1)" }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className="rounded-2xl bg-white shadow-sm flex flex-col overflow-hidden focus-within:ring-2 focus-within:ring-blue-500"
                  tabIndex={0}
                  aria-labelledby={`post-title-${post.id}`}
                >
                  {featuredImage && (
                    <img
                      src={featuredImage}
                      alt={`Featured image for ${post.title.rendered.replace(/<\/?[^>]+(>|$)/g, "")}`}
                      className="w-full h-40 object-cover rounded-t-2xl"
                      loading="lazy"
                    />
                  )}
                  <div className="p-5 flex flex-col flex-grow">
                    <h2
                      id={`post-title-${post.id}`}
                      className="text-xl font-semibold mb-2 text-gray-900 line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <div
                      className="text-gray-700 mb-5 flex-grow overflow-hidden line-clamp-4 text-sm"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    <Link
                      to={`/blog/${post.slug}`}
                      className="mt-auto inline-block rounded-full bg-red-600 px-5 py-2 text-center font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 text-sm"
                      aria-label={`Read more about ${post.title.rendered.replace(/<\/?[^>]+(>|$)/g, "")}`}
                    >
                      Read More
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </section>
        )}
      </main>
    </>
  );
}
