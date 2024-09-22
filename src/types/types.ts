export interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  score: string;
}

export interface User {
  id: number;
  name: string;
  favoriteTeam: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  params: string;
  headers: string;
}

export interface UseAxiosResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export interface UseAxiosConfig {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  headers?: { [key: string]: string };
  body?: any;
  params?: { page: string };
}
