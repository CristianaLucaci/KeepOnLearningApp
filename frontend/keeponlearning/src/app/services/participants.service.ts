import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Reg} from "../common/reg";
import {Observable} from "rxjs";
import {User} from "../common/user";
import {ParticipantSmt} from "../common/participant-smt";
import {Participant} from "../common/participant";

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  private baseUrl='http://localhost:8081/api/particip/response';

  constructor(private httpClient:HttpClient) { }

  add_participant(p: ParticipantSmt): Observable<any>  {
    return this.httpClient.post<Participant>(this.baseUrl,p);
  }
}
