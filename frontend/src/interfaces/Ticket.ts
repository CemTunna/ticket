export interface ClientTicket {
  issue: string;
  description: string;
}
export interface DatabaseTicket extends ClientTicket {
  _id: string;
  user: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}
