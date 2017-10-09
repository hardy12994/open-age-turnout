import { Client } from "app/models";

export class Employee {
  id: number;
  client: Client;
  status: string;
  name: string;
  username: string;
  token: string;
  password: string;
  phone: string;
  admin: boolean;
}