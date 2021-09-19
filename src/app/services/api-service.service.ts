import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
tabledata:object={};
private datasub = new BehaviorSubject<object>(this.tabledata);
currentdata = this.datasub.asObservable();
  constructor(
    private httpClient: HttpClient
  ) { }

  
  getPatients() {
    return this.httpClient.get(environment.queryURI + '/Patient',
      { headers: this.getHeaders() });
  }

  getPatientOnBirthDate(){
    return this.httpClient.get(environment.queryURI + '/Patient',
    { headers: this.getHeaders() });
}

searchPatient(name,birthdate){
  return this.httpClient.get(environment.queryURI + '/Patient?given='+ name + '&birthdate='+ birthdate ,
  { headers: this.getHeaders() });
}

changeDataSub(newDat: object){
  this.datasub.next(newDat);
}


  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/fhir+json'
    });
    return headers;
  }
}


