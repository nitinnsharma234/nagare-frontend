export interface IBaseAPI {
  url: string;
  values?: any;
  showToast?: boolean;
  message?: string | undefined;
}

export interface IGetAPI extends IBaseAPI {}

export interface IPostAPI extends IBaseAPI {}

export interface IPatchAPI extends IPostAPI {}

export interface IDeleteAPI extends IBaseAPI {}

export interface IAPIResponse {
  data: any;
  status: number;
  message: string;
  errors: false | null | undefined | string;
}
