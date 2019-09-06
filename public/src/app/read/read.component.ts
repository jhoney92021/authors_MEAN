import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//IMPORT FOR HTTP SERVICE
import { HttpService } from '../http.service';
//IMPORT FOR HTTP SERVICE;

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  @Input() parentInfo: any;
  // 1. Create an Event in the CreateComponent
  @Output() aCreateEventEmitter = new EventEmitter();
  newAuthor: any;

  /*REQUIRED TO INTIALIZE SERVICE*/
  constructor(private _httpService: HttpService){};
  /*REQUIRED TO INTIALIZE SERVICE*/

  ngOnInit() {
    this.newAuthor = {name:""}
  }

  postAuthorToService(){
    let temp = this._httpService.makeAuthor(this.newAuthor)
    console.log(`*************${JSON.stringify(temp)}*************`)
    temp.subscribe(data => this.newAuthor = data)
  }

}
