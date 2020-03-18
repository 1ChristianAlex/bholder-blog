export interface IPost {
  id?: number;
  user_id?: string;
  title?: string;
  content?: string;
  categorie?: string;
  thumbnail?: string;
  meta?: string;
  keywords?: string;
  created_at?: Date;
  updated_at?: Date;
}
