export interface ClientNote {
  text: string;
}
export interface DatabaseNote extends ClientNote {
  _id: string;
  user: string;
  isStaff: boolean;
  createdAt: string;
  updatedAt: string;
}
