import { Employee } from "app/models";

export class Organization {
    name: string;
    address_1: string;
    address_2: string;
    state: string;
    city: string;
    pincode: string;
    picUrl: string;
    phone: string;
    employee: Employee
}