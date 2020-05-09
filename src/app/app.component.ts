import { Component,  OnInit } from '@angular/core';
import { HighContrastModeDetector } from '@angular/cdk/a11y';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AppComponent {
  title = 'news-tracker';

  showLatest: boolean = true;
  showMost: boolean = true;
  showMovies: boolean = true;

  cachedWidth:any = window.innerWidth;


  onResize(event){
    let checkWidth = window.innerWidth;
    if(checkWidth !== this.cachedWidth){
      if(checkWidth < 768) {
        this.showLatest = true;
        this.showMost = false;
        this.showMovies = false;
      }
      this.cachedWidth = checkWidth;
    }
  }


  ngOnInit(){

    if (window.innerWidth < 768) {
      this.showLatest = true;
      this.showMost = false;
      this.showMovies = false;
    };
    
  };


  hideAll(){
    this.showLatest = false;
    this.showMost = false;
    this.showMovies = false;
  };

  showLatestNews(){
    this.hideAll();
    this.showLatest = true;
  };

  showMostNews(){
    this.hideAll();
    this.showMost = true;
  };

  showMovieNews(){
    this.hideAll();
    this.showMovies = true;
  };

}