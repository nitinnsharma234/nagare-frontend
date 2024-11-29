export interface IBaseAPI {
  url: string;
  params?: any;
}

export interface IGetAPI extends IBaseAPI {}

export interface IPostAPI extends IBaseAPI {
  values: any;
}

export interface IPatchAPI extends IPostAPI {}

export interface IDeleteAPI {
  url: string;
  values?: any;
}

export interface IAPIResponse {
  data: any;
  status: number;
  message: string;
  errors: false | null | undefined | string;
}
