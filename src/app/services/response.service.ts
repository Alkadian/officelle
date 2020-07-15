import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
	providedIn: 'root'
})
export class ResponseService {

	constructor() { }

	errorHandler(response: string) {
		Swal.fire({
			title: 'Oops...',
			text: response,
			icon: "error",
			showConfirmButton: false
		});
	}

	successHandler(response: string) {
		Swal.fire({
			title: response,
			icon: "success",
			showConfirmButton: false
		});
	}
}
