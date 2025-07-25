import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import BlogList from '../components/BlogList';
import { loadBlogPosts } from '../utils/content';
import type { BlogPost } from '../types/content';

function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const blogPosts = await loadBlogPosts();
        setPosts(blogPosts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold underline p-4 text-violet-900/50 dark:text-violet-300">
        Blog
      </h1>
      
      <Navbar />
      
      <div className="mt-8">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Loading blog posts...
            </p>
          </div>
        ) : (
          <BlogList posts={posts} />
        )}
      </div>
    </div>
  );
}

export default Blog;