import { Injectable } from '@angular/core';
import { Md5 } from "../../../node_modules/ts-md5/dist/md5";

@Injectable({
  providedIn: 'root'
})
export class HashService {

  constructor() { }

  public generateId(): string {
	return String(Md5.hashStr(String(new Date().getTime())));
}
}
