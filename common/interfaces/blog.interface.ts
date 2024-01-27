/*
"created_at": "2023-09-28T00:37:22.163012+01:00",
"id": 2,
"title": "Hương vị của nhân sâm",
"image": "data/post/Screenshot from 2023-09-28 07-26-47.png",
"updated_at": "2023-09-28T00:37:22.163012+01:00",
"image_list": [],
"author_id": 1,
"content": "Nội dung bài viết 2"
*/

export interface IBlog {
  id: number;

  title: string;

  image: string;

  banner: string;

  image_list?: string[];

  content: string;

  created_at: Date;

  updated_at: Date;

  author_id: number;

  author_name: string;

  category_id: number;
}

export type IBlogs = IBlog[];

export interface IGetBlogsParams {
  next?: number;

  limit?: number;
}

export interface IGetBlogsSuggestParams {
  post_id: number;

  category_id: number;
}
