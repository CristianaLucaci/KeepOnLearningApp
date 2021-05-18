import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Reg} from "../common/reg";
import {Observable} from "rxjs";
import {User} from "../common/user";
import {CourseSmt} from "../common/course-smt";
import {Offer} from "../common/offer";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private registerUrl='http://localhost:8081/api/a/b';
  constructor(private httpClient: HttpClient) { }

  add_course(c: CourseSmt): Observable<any>  {
    return this.httpClient.post<Offer>(this.registerUrl,c);
  }

}
