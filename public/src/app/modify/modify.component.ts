import { Component, OnInit, Input } from '@angular/core';
//IMPORT FOR HTTP SERVICE
import { HttpService } from '../http.service';
//IMPORT FOR HTTP SERVICE

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  @Input() voteToMod: any;
  @Input() Author: any;
  voteMod: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() { 
    console.log(`**************${this.Author.name}****************`)
    console.log(`**************${this.voteToMod.value.vote}****************`)
    
  }

  voteUp(id, idx){
    console.log(`**************${id}****************`)
    console.log(`**************${idx}****************`)
    this._httpService.voteUp(id, idx)            
        .subscribe(data => this.voteMod = data)
  }
  
  voteDown(id, idx){ 
    this._httpService.voteDown(id, idx)
        .subscribe(data => this.voteMod = data)
  }

}