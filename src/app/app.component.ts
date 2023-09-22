import { Component } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

declare var gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'test_analytics';
  public counter: number = 0;
  constructor(
    private $gaService: GoogleAnalyticsService
  ) { }

  increaseBy() {
    // gtag('event', 'button-click')
    this.$gaService.event('button-click');
      this.counter += 1;

    }
  reduceBy(){
    if (this.counter <1){
      return;
    }
    this.counter -= 1;
  }

}
