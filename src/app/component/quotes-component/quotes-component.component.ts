import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { QuotesService } from './../../services/quotes.service';
import { SearchModel } from './../../model/search.model';
@Component({
  selector: 'app-quotes-component',
  templateUrl: './quotes-component.component.html',
  styleUrls: ['./quotes-component.component.scss']
})
export class QuotesComponentComponent implements OnInit {
  calendarPlugins = [dayGridPlugin];
  public errorMessage:any;
  private searchModel:any;
  public calendarFaresData:Array<any>=[];
  public currentMonth: string;
  viewDate: Date = new Date();
  constructor(private quotesService:QuotesService) { }

  ngOnInit() {
    this.searchModel = new SearchModel();
    this.currentMonth= this.viewDate.getFullYear() + "-0" +  (this.viewDate.getMonth()+1);
  }

  searchFlight(){
    this.calendarFaresData=[];
    this.quotesService.loadQuotes(this.searchModel,this.currentMonth).subscribe((data:any) => {
      let quotesRecord = data.Quotes;
      if(quotesRecord !== undefined && quotesRecord.length>0){
        for(let i=0; i< quotesRecord.length ; i++){
          if(quotesRecord[i].OutboundLeg.DepartureDate !== undefined){
            let depatureDate = quotesRecord[i].OutboundLeg.DepartureDate.split("T");
            this.calendarFaresData.push({ title: quotesRecord[i].MinPrice+" "+data.Currencies[0].Code, date: depatureDate[0]});
          }
        }
      }else{
        this.errorMessage = "No Quotes Available";
      }
    },error=>{
        this.errorMessage = error.message;
    });
  }
}
