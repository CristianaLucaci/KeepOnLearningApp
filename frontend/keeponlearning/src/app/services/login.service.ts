import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../common/user";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl='http://localhost:8081/api';
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  authenticate(email, password) {
    if (email === "dragos@yahoo.com" && password === "password") {
      sessionStorage.setItem('email', email)
      return true;
    } else {
      return false;
    }
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('email')
  }

}
