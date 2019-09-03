import { HttpHeaders } from '@angular/common/http';
export class ServerConfig{
  private appKey='a8802281eemsh9c89571827d7dafp154af7jsn34fe6b3472ba';
  private api='https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com';
  private constantData = {
    "locale": "en-US",
    "currency":"USD",
    "country":"US"
  } 

  getKey()
  {
    return this.appKey;
  }

  getApiEndPoint()
  {
    return this.api;
  }
  getConstantData(){
    return this.constantData;
  }
  getHeaders(){
     let headers = {
          'x-rapidapi-key':this.getKey(),
          'x-rapidapi-host':'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
          'content-type':'application/x-www-form-urlencoded'
      };
      return headers;
  }

}