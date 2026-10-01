export interface LoginRequest {
  username: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  user: User;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  access_token: string;
  refresh_token: string;
  user: User;
}