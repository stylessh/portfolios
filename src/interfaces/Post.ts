type Tags = {
  value: string;
};

export interface IPost {
  id?: number;
  title?: string;
  content?: string;
  image?: any;
  slug?: string;
  tags?: Tags[];

  published_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}
