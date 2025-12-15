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

export type MutationApiResponse =
  | SuccessApiResponse
  | FailedApiResponse
  | ValidationFailedApiResponse;
