import { Injectable } from '@angular/core';
//IMPORT FOR HTTP CLIENT
import { HttpClient } from '@angular/common/http';
//IMPORT FOR HTTP CLIENT

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  getAuthors(){
  return this._http.get('/author');/*get all*/
  }
  makeAuthor(newAuthor){
    return this._http.post('/author', newAuthor);/*make author*/
  }
  authorQuote(id, newQuote){
    return this._http.post(`/author/${id}`, newQuote);/*make author*/
  }
  deleteAuthor(id){
    return this._http.delete(`/author/${id}`);/*delete author*/
  }
  editAuthor(id, changes){
    return this._http.put(`/author/${id}`, changes);/*edit author*/
  }
  getOneAuthor(id){
    return this._http.get(`/author/${id}`);/*get a author*/
  }
}
