import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { QuotesComponentComponent } from './component/quotes-component/quotes-component.component';
import { ServerConfig } from './server-config';
import { QuotesService } from './services/quotes.service';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule
  ],
  providers: [QuotesService, ServerConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
