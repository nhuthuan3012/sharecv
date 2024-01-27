export interface IVote {
  id: number;
  product_id: number;
  user_id: number;
  comment: string;
  created_at: Date;
  updated_at: Date;
}

export interface IVoteProduct {
  id: number;
  name: string;
  vote_count: number;
  vote_average_score: number;
  vote_five_star_count: number;
  vote_four_star_count: number;
  vote_three_star_count: number;
  vote_two_star_count: number;
  vote_one_star_count: number;
}

export interface IVoteProductDetail {
  product: IVoteProduct;
  vote_list: IVoteProduct[];
}
