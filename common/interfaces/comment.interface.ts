export interface IComment {
  id: number;
  post_id: number;
  content: string;
  name: string;
}

export type IComments = IComment[];

export interface GetListCommentParams {
  limit: number;
}
