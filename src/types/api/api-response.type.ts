export type ApiResponse = {
  success: boolean;
  message: string;
};

export type SuccessApiResponse = ApiResponse & {
  success: true;
};

export type SuccessApiResponseWithData<T> = SuccessApiResponse & {
  data: T;
};

export type FailedApiResponse = ApiResponse & {
  success: false;
  error: string;
};

export type ValidationFailedApiResponse = FailedApiResponse & {
  details: Record<string, string[]>;
};

export type RetrieveApiResponse<T> =
  | (SuccessApiResponseWithData<T> & { meta: MetaApiResponse })
  | FailedApiResponse;

export type MutationApiResponse =
  | SuccessApiResponse
  | FailedApiResponse
  | ValidationFailedApiResponse;

export type MetaApiResponse = {
  page: number;
  limit: number;
  total: number;
  lastPage: number;
};
