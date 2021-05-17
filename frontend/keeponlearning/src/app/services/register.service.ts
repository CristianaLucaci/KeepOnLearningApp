import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Register} from "ts-node";
import {User} from "../common/user";
import {Observable} from "rxjs";
import {Reg} from "../common/reg";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private registerUrl='http://localhost:8081/api/register/registered';

  constructor(private httpClient: HttpClient) { }

  register(reg: Reg): Observable<any>  {
    return this.httpClient.post<User>(this.registerUrl,reg);
  }

}
