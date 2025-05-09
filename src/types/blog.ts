export type TagFilterItem = {
  id: string;
  name: string;
  count: number;
};

export interface Post {
  id: string;
  title: string;
  slug: string;
  description?: string;
  coverImage?: string;
  tags?: string[];
  author?: string;
  date?: string;
  modifiedDate?: string;
}
