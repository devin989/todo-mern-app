export type UserPartial = Partial<User>;

export interface User {
  isAuthenticated: boolean;
  username: string | null;
  token: string | null;
}

export type UserToken = {
  id: string;
  iat: number;
  exp: number;
};
