
export interface IBook {
  id: number;
  title: string;
  author: string;
  description: string;
  cover: string;
  publicationDate: string;
}

export interface IGetBookListParams {
  _page: number;
  _limit: number;
}
