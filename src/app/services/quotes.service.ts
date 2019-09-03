import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ServerConfig } from './../server-config';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class QuotesService {

  constructor(private http:HttpClient,private configObj:ServerConfig) { }

  loadQuotes(searchModel,inBoundDate): Observable<any>{
    let constantData = this.configObj.getConstantData();
    return this.http.get(this.configObj.getApiEndPoint()+"/apiservices/browsequotes/v1.0/"+constantData.country+"/"+constantData.currency+"/"+constantData.locale+"/"+searchModel.origin+"/"+searchModel.destination+"/"+inBoundDate,{
      headers:this.configObj.getHeaders()
    });
  }
}
