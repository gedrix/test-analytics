import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test_analytics';
  public counter: number = 0;

  increaseBy():void{
    this.counter += 1;
  }

  reduceBy():void{
    if (this.counter <1){
      return;
    }

    this.counter -= 1;
  }

}
