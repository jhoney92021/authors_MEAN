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
    toDelete:any;
    

    /*REQUIRED TO INTIALIZE SERVICE*/
    constructor(private _httpService: HttpService){};
    /*REQUIRED TO INTIALIZE SERVICE*/
      ngOnInit() {
        this.allAuthorsFromService();        
        this.newQuote = {vote:0,content:""};
       }

      allAuthorsFromService(){
         let temp = this._httpService.getAuthors()
            temp.subscribe(data => this.allAuthors = data);
      }

      getOneAuthorFromService(idx){
        this._httpService.getOneAuthor(this.allAuthors[idx]._id)
          .subscribe(data => this.Author = data);
      }

      postQuoteToService(_id){
        this._httpService.authorQuote(_id, this.newQuote)
          .subscribe(data => this.newQuote = data);
      }

      deleteAuthorFromService(idx){
        let temp = this._httpService.deleteAuthor(this.allAuthors[idx]._id)
        temp.subscribe(data => this.toDelete = data);
      }
}
