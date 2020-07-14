import { IOccupant } from "../interfaces/occupant";

export class Occupant implements IOccupant{
	id: string;
	office_id: string;
	name: string;
	surname: string;
}
