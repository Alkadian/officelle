import { IOffice } from "../interfaces/office";

export class Office implements IOffice{
	id: string;
	name: string;
	location: string;
	email: string;
	tel?: string;
	capacity: number;
	background_color?: string;
	foreground_color?: string;
}
