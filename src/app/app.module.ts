import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgxGoogleAnalyticsModule.forRoot('G-GGBG7ZSCQ9'),  //vscode
    NgxGoogleAnalyticsModule.forRoot('G-V3P1K0Z2V0'),     //netlify
    NgxGoogleAnalyticsRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
