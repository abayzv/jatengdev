export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  featured_image: string;
  published_at: string;
  category: {
    id: number;
    name: string;
    slug: string;
  }
  tags: string[];
  content?: string;
}