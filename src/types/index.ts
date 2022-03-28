export interface Response {
    readonly status?: number,
    data?: unknown,
    error?: unknown
}
export interface UseQuery  {
    readonly data?: unknown,
    readonly error?: unknown
};

export type QueryItem = typeof Response;
  
export type StateQuery = Record<string, QueryItem>;
  