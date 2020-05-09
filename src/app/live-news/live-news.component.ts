import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-live-news',
  templateUrl: './live-news.component.html',
  styleUrls: ['./live-news.component.scss']
})

export class LiveNewsComponent {

  response: any;

  listOne:any;

  composer: any;

  selectedValue: any = null;

  sortBy(prop: string) {
    return this.composer.arrcompositions.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

  constructor(private http: HttpClient) { 

  }

  ngOnInit() {
    let latestNews = this.http.get('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=A4WBhs8b006l1b7AhZ1pWnlMT67XPuMV');
    latestNews.subscribe((response) => {
     this.response = response;
    });

  }

  hideShowElements(section: string) {
   
  }


}
