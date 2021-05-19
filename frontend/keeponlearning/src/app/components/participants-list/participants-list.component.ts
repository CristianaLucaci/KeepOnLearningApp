import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.css']
})
export class ParticipantsListComponent implements OnInit {
  users;
  //offers: Array<Offer> = [];
  @Input() id: string;
  constructor(private router: Router,private http:HttpClient,private route: ActivatedRoute) { }




  ngOnInit(): void {
    this.route.paramMap.subscribe( params =>
      this.id = params.get('id')
    )
    console.log(`ceva : ${this.id}`);
    this.getAll(this.id);

  }


  private getAll(id: string) {
    this.http.get<any>(`http://localhost:8081/api/participants`).pipe()
      .subscribe(
        (response) =>{

          this.users=response._embedded.participants.filter(res=>res.id_course==this.id);

        },
        (err)=>{
          console.log(err);
        }

      )
  }






}
