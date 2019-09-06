import { Component, /*for implementation*/ OnInit } from '@angular/core';
//IMPORT FOR HTTP SERVICE
import { HttpService } from './http.service';
//IMPORT FOR HTTP SERVICE

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
implements OnInit
{
    allAuthors:any;
    Author:any;
    newQuote:any;
    newAuthor:any;

    /*REQUIRED TO INTIALIZE SERVICE*/
    constructor(private _httpService: HttpService){};
    /*REQUIRED TO INTIALIZE SERVICE*/
      ngOnInit() {
        this.newQuote = {vote:0,content:""}
       }

      allAuthorsFromService(){
         this._httpService.getAuthors()
            .subscribe(data => this.allAuthors = data);
      }

      getOneAuthorFromService(idx){
        this._httpService.getOneAuthor(this.allAuthors[idx]._id)
          .subscribe(data => this.Author = data);
      }

      postQuoteToService(_id){
        this._httpService.authorQuote(_id, this.newQuote)
          .subscribe(data => this.newQuote = data);
      }

      
    postAuthorToService(){
      let temp = this._httpService.makeAuthor(this.newAuthor)
      console.log(`*************${JSON.stringify(this.newAuthor)}*************`)
      console.log(`*************${JSON.stringify(temp)}*************`)
      temp.subscribe(data => this.newAuthor = data)
    }

}
