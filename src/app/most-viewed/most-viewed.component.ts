import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-most-viewed',
  templateUrl: './most-viewed.component.html',
  styleUrls: ['./most-viewed.component.scss']
})
export class MostViewedComponent implements OnInit {

  response: any;

  selectedOption: string = '';

  selectedDay: any;

  selectedFilter: any = 'viewed';

  selectedDays: any = '1';


  constructor(private http: HttpClient) { }

  ngOnInit() {
    let viewedNews = this.http.get('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=A4WBhs8b006l1b7AhZ1pWnlMT67XPuMV');
    viewedNews.subscribe((response) => {
     this.response = response;
    });
  }

  makeApiCall() {

    let getFlter = this.selectedFilter;
    let getDays = this.selectedDays;

    let createApi = 'https://api.nytimes.com/svc/mostpopular/v2/'+getFlter+'/'+getDays+'.json?api-key=A4WBhs8b006l1b7AhZ1pWnlMT67XPuMV';
    console.log(createApi);
    let updateNews = this.http.get(createApi);
    updateNews.subscribe((response) => {
      this.response = response;
     });
  }

}
