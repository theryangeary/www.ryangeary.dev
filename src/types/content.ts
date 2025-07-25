export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  completedAt: string;
  category: 'production' | 'toy';
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export interface BlogPostFrontmatter {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
}