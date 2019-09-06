import { Component, OnInit } from '@angular/core';
//IMPORT FOR HTTP SERVICE
import { HttpService } from '../http.service';
//IMPORT FOR HTTP SERVICE

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newAuthor:any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newAuthor = {name:""};
  }

  postAuthorToService(){
    let temp = this._httpService.makeAuthor(this.newAuthor)
    temp.subscribe(data => this.newAuthor = data)
  }

}
