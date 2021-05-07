export interface IPost {
  id?: number;
  title?: string;
  content?: string;
  image?: any;
  slug?: string;
  tags?: string[];

  published_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}
