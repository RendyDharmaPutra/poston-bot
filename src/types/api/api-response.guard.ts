import {
  ApiResponse,
  FailedApiResponse,
  SuccessApiResponse,
  SuccessApiResponseWithData,
  ValidationFailedApiResponse,
} from "./api-response.type";

export const isSuccess = <T>(res: ApiResponse): res is SuccessApiResponse =>
  res.success && !("data" in res);

export const isSuccessWithData = <T>(
  res: ApiResponse
): res is SuccessApiResponseWithData<T> => res.success && "data" in res;

export const isFailed = <T>(res: ApiResponse): res is FailedApiResponse =>
  !res.success && !("details" in res);

export const isValidationFailed = <T>(
  res: ApiResponse
): res is ValidationFailedApiResponse => !res.success && "details" in res;
