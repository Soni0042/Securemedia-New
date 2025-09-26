import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://thesecuremedia.com/blog/wp-json/wp/v2/posts?slug=${slug}&_embed`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch post");
        return res.json();
      })
      .then((data) => {
        if (data.length > 0) setPost(data[0]);
        else setPost(null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p className="text-center mt-12">Loading post…</p>;
  if (error) return <p className="text-center mt-12 text-red-500">{error}</p>;
  if (!post) return <p className="text-center mt-12">Post not found.</p>;

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <article className="max-w-3xl mx-auto px-6 py-12 font-sans">
      <Link to="/blog" className="text-red-600 underline mb-8 inline-block">
        ← Back to Blog
      </Link>
      {featuredImage && (
        <img
          src={featuredImage}
          alt={post.title.rendered}
          className="w-full rounded-lg mb-8 object-cover max-h-96"
        />
      )}
      <h1
        className="text-4xl font-bold mb-8 leading-tight"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <div
        className="space-y-6 text-gray-800 leading-relaxed text-lg blog-content"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        style={{ wordBreak: "break-word" }}
      />
      <style>{`
        .blog-content a {
          color: inherit;
          text-decoration: underline;
          transition: color 0.3s ease;
        }
        .blog-content a:hover {
          color: #dc2626; /* Tailwind red-600 */
        }
      `}</style>
    </article>
  );
}
