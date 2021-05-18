import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {User} from "../../common/user";
import {Offer} from "../../common/offer";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.css']
})
export class ParticipantsListComponent implements OnInit {
  users;
  //offers: Array<Offer> = [];
  constructor(private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.getAll();

  }


  private getAll() {
    this.http.get<any>(`http://localhost:8081/api/users`)
      .subscribe(
        (response) =>{
          console.log(`ceva : ${response._embedded.users}`);
          this.users=response._embedded.users;
        },
        (err)=>{
          console.log(err);
        }

      )
  }
}
