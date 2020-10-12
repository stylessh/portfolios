export interface IProject {
  id: number;
  name: string;
  role: string[];
  technologies: string[];

  right: boolean;

  created_at: Date;
  published_at: Date;
  updated_at: Date;

  images: any;
}
