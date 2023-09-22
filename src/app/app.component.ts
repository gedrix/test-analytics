import { Component } from '@angular/core';
//import { gtag } from '@google/analytics';
declare var gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'test_analytics';
  public counter: number = 0;
  constructor() { }

  // increaseBy() {
  //   gtag('config', 'G-V3P1K0Z2V0', {
  //     // Additional event parameters
  //   });
  //   this.counter += 1;
  // }
  increaseBy() {
    gtag('event', 'button-click', {
    'event_category': 'BUTTON_CLICK',
    'event_label': 'Track Me Click',
    'value': 'Put a value here that is meaningful with respect to the click event'   })
      this.counter += 1;

    }
  reduceBy(){
    if (this.counter <1){
      return;
    }
    this.counter -= 1;
  }

}
