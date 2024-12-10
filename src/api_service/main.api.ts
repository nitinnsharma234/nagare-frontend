import { AxiosResponse } from 'axios';
import {
  IAPIResponse,
  IDeleteAPI,
  IGetAPI,
  IPostAPI,
} from '../common/interfaces';
import apiClient from './api.client';
import toast from 'react-hot-toast';

const EmptyBadRequest = {
  errors: 'Bad Request',
  message: 'Oops something went wrong',
  status: 400,
};

export async function getApi({
  url,
  showToast = true,
  message,
  values,
}: IGetAPI): Promise<IAPIResponse> {
  try {
    const request = await apiClient.get(url, values);
    const response = await handleAPIReturn(request, showToast, message);
    return response;
  } catch (error: any) {
    return await handleAPIReturn(error, showToast, message);
  }
}

export async function postApi({
  url,
  values,
  showToast = true,
  message,
}: IPostAPI): Promise<IAPIResponse> {
  try {
    const request = await apiClient.post(url, values);
    const response = await handleAPIReturn(request, showToast, message);
    return response;
  } catch (error: any) {
    return await handleAPIReturn(error, showToast, message);
  }
}

export async function patchApi({
  url,
  values,
  showToast = true,
  message,
}: IPostAPI): Promise<IAPIResponse> {
  try {
    const request = await apiClient.patch(url, values);
    const response = await handleAPIReturn(request, showToast, message);
    return response;
  } catch (error: any) {
    return await handleAPIReturn(error, showToast, message);
  }
}

export async function deleteApi({
  url,
  values,
  showToast = false,
  message,
}: IDeleteAPI): Promise<IAPIResponse> {
  try {
    const request = await apiClient.delete(url, values);
    const response = await handleAPIReturn(request, showToast, message);
    return response;
  } catch (error: any) {
    return await handleAPIReturn(error, showToast, message);
  }
}

const handleAPIReturn = async (
  request: AxiosResponse,
  showToast: boolean,
  message: string | undefined
): Promise<IAPIResponse> => {
  try {
    const result = await request;

    if (!result && showToast) {
      toast.error(message || EmptyBadRequest.message);
      return result || EmptyBadRequest;
    }

    const { data } = result;

    if (showToast) {
      if (data?.error || data?.status >= 400) {
        toast.error(
          message || data?.message ? data?.message : EmptyBadRequest.message
        );
      } else
        toast.success(
          message ? message : data?.message ? data?.message : 'Success'
        );
    }
    return data;
  } catch (error: any) {
    console.log(error);
    const { data } = error.response;
    if (showToast) {
      toast.error(
        message || data?.message ? data?.message : EmptyBadRequest.message
      );
    }
    return data || EmptyBadRequest;
  }
};
