import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BlogPost from '../components/BlogPost';
import { loadBlogPost } from '../utils/content';
import type { BlogPost as BlogPostType } from '../types/content';

function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setError('No post slug provided');
        setLoading(false);
        return;
      }

      try {
        const blogPost = await loadBlogPost(slug);
        if (blogPost) {
          setPost(blogPost);
        } else {
          setError('Post not found');
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
        setError('Error loading post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4">
        <Navbar />
        <div className="text-center py-12">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Loading post...
          </p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4">
        <Navbar />
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
            {error || 'Post not found'}
          </h1>
          <a 
            href="/blog" 
            className="text-violet-600 dark:text-violet-400 hover:underline"
          >
            ← Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container mx-auto px-4 py-4">
        <Navbar />
      </div>
      <BlogPost post={post} />
      <div className="container mx-auto px-4 pb-8">
        <a 
          href="/blog" 
          className="text-violet-600 dark:text-violet-400 hover:underline"
        >
          ← Back to Blog
        </a>
      </div>
    </div>
  );
}

export default BlogPostPage;