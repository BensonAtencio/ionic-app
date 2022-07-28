import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  apiConnect() {
    return this.http.get("https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple")
  }
}
