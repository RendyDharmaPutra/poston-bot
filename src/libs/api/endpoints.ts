import { apiClient } from "./client";

/**
 * Object that contains all the API endpoints.
 *
 * Each property of this object represents an API endpoint and its value is the relative URL path.
 *
 * @example
 * // Get the relative URL path for the "posts" endpoint
 * const postsEndpoint = endpoints.posts; // "/api/posts"
 */
export const endpoints = {
  posts: {
    root: "/posts",
  },
};
