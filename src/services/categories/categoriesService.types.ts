export interface ICategory {
  id: string;
  title: string;
  description: string;
  numOfPosts: number;
  numOfThreads: number;
}
export interface ICategoriesResponse {
  results: ICategory[];
}