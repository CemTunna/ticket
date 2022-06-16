export interface ClientUser {
  name: string;
  email: string;
  password: string;
}
export interface DatabaseUser extends ClientUser {
  isAdmin: boolean;
}
