export interface IFileData {
  url: string;
  originalFileName: string;
}

export enum HTTP_METHODS {
  GET = 'get',
  POST = 'post',
  PATCH = 'patch',
  PUT = 'put',
  DELETE = 'delete',
}