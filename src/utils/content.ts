import matter from 'gray-matter';
import type { Project, BlogPost, BlogPostFrontmatter } from '../types/content';

export async function loadProjects(): Promise<Project[]> {
  try {
    const response = await fetch('/src/content/projects.json');
    if (!response.ok) {
      throw new Error('Failed to load projects');
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
}

export async function loadBlogPosts(): Promise<BlogPost[]> {
  const blogPostModules = import.meta.glob('/src/content/blog/*.md', { query: '?raw', import: 'default' });
  const posts: BlogPost[] = [];

  for (const [path, modulePromise] of Object.entries(blogPostModules)) {
    try {
      const content = await modulePromise() as string;
      const { data, content: markdownContent } = matter(content);
      const frontmatter = data as BlogPostFrontmatter;
      
      const slug = path.replace('/src/content/blog/', '').replace('.md', '');
      
      posts.push({
        slug,
        title: frontmatter.title,
        date: frontmatter.date,
        tags: frontmatter.tags,
        excerpt: frontmatter.excerpt,
        content: markdownContent,
      });
    } catch (error) {
      console.error(`Error loading blog post ${path}:`, error);
    }
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function loadBlogPost(slug: string): Promise<BlogPost | null> {
  // Load all posts and find the matching one
  const posts = await loadBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}