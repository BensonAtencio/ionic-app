import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  topic: any;
  results: any;

  constructor(public http: HttpClient, public api: ApiService) { }

  ngOnInit() {
  }

  news(){
    this.http.get(`https://newsapi.org/v2/everything?q=${this.topic}&apiKey=0c3391e09daa4eaba27ff2482a115275`).subscribe(news =>{
      console.log(news)
      this.results = news['articles']
    })
  }

}
