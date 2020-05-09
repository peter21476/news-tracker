import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  response: any;

  startDate = new Date(1990, 0, 1);

  selectedName: any;

  selectFrom:any;

  selectTo:any;

  messageToBox:any;

  showAlert: boolean = false;

  constructor(private http: HttpClient) {
   }

  ngOnInit() {
    let movieReviews = this.http.get('https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=A4WBhs8b006l1b7AhZ1pWnlMT67XPuMV');
    movieReviews.subscribe((response) => {
     this.response = response;
    });
  }

  getMovieByName() {

    this.showAlert = false;

    let getName = this.selectedName;

    let nameInvalid;
    let fromInvalid;
    let toInvalid;

    if(getName == null || getName == undefined) {
      getName = undefined;
      nameInvalid = "*Please add a movie title<br /><br />"
    } else {
      nameInvalid = '';
    }

    let getFrom = this.selectFrom;

    if(getFrom == null || getFrom == undefined) {
      getFrom = undefined;
      fromInvalid = "*Please add a 'From' date<br /><br />"
    } else {
      fromInvalid = '';
    }

    let getTo = this.selectTo;

    if(getTo == null || getTo == undefined) {
      getTo = undefined;
      toInvalid = "*Please add a 'To' date"
    } else {
      toInvalid = '';
    }

    let alertMessage = nameInvalid + fromInvalid + toInvalid;

    this.messageToBox = {message: alertMessage};

    if(getFrom == undefined || getName == undefined || getTo == undefined) {
      this.showAlert = true;
    }


    if(getFrom !== undefined && getTo !== undefined && getName !== undefined) {
      getFrom = moment(getFrom).format('YYYY-MM-DD');
      getTo = moment(getTo).format('YYYY-MM-DD');
      let makeMoviesCall = this.http.get('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='+getName+'&opening-date='+ getFrom +';' + getTo + '&api-key=A4WBhs8b006l1b7AhZ1pWnlMT67XPuMV');
      makeMoviesCall.subscribe((response) => {
        this.response = response;
      });

    }
  }

}
