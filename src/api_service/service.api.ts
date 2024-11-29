import {
  IAPIResponse,
  IDeleteAPI,
  IGetAPI,
  IPatchAPI,
  IPostAPI,
} from "../common/interfaces";
import apiClient from "./api.client";
import axios, { AxiosError, AxiosResponse } from "axios";

const EmptyBadRequest: IAPIResponse = {
  errors: "Bad Request",
  message: "Oops, something went wrong",
  status: 400,
  data: null,
};

// Common GET API
export async function getApi({ url, params }: IGetAPI): Promise<IAPIResponse> {
  try {
    const response = await apiClient.get(url, { params });
    return handleAPIReturn(response);
  } catch (error) {
    return handleError(error);
  }
}

// Common POST API
export async function postApi({
  url,
  values,
  params,
}: IPostAPI): Promise<IAPIResponse> {
  try {
    const response = await apiClient.post(url, values, { params });
    return handleAPIReturn(response);
  } catch (error) {
    return handleError(error);
  }
}

// Common DELETE API
export async function deleteApi({
  url,
  values,
}: IDeleteAPI): Promise<IAPIResponse> {
  try {
    const response = await apiClient.delete(url, { data: values });
    return handleAPIReturn(response);
  } catch (error) {
    return handleError(error);
  }
}

// Common PATCH API
export async function patchApi({
  url,
  values,
}: IPatchAPI): Promise<IAPIResponse> {
  try {
    const response = await apiClient.patch(url, values);
    return handleAPIReturn(response);
  } catch (error) {
    return handleError(error);
  }
}

// Common PUT API
export async function putApi({
  url,
  values,
}: IPatchAPI): Promise<IAPIResponse> {
  try {
    const response = await apiClient.put(url, values);
    return handleAPIReturn(response);
  } catch (error) {
    return handleError(error);
  }
}

// Handle successful API response
const handleAPIReturn = (response: AxiosResponse): IAPIResponse => {
  const { data, status } = response;
  return {
    data,
    status,
    message: data?.message || "Success",
    errors: null,
  };
};

// Handle API error response
const handleError = (error: unknown): IAPIResponse => {
  if (axios.isAxiosError(error)) {
    const { response } = error;
    return {
      data: response?.data || null,
      status: response?.status || 500,
      message: response?.data?.message || "An error occurred",
      errors: response?.data?.errors || "Unknown error",
    };
  }

  // Handle non-Axios errors
  console.error("Unexpected error:", error);
  return EmptyBadRequest;
};
