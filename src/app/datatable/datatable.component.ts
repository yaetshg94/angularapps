
import { Component, OnInit, NgZone, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../services/api-service.service';
import { DatePipe } from '@angular/common';
import {catchError, map, take} from 'rxjs/operators';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatatableComponent implements OnInit {

  title = 'fhir-app-test';
  data:any;
  birthdateData=[];
  BDdata : string[] = [];
  timeOfRequest:any;
  timereq:any;
  namesearch:any;
  birthdate:any;
  dataSubject:any={};

  constructor(  private apiService: ApiService, private _ngZone:NgZone) {
    
   }

   ngOnInit() { 
  
    const startTimestamp = new Date().getTime();
    this.apiService.getPatients().subscribe(
      data => {
        console.log(data);
        const endTimeStamp = new Date().getTime();
        this.timeOfRequest = endTimeStamp - startTimestamp;
        this.data = data['entry'].sort(function(a, b){         
          return b['resource']['birthDate']-a['resource']['birthDate'];
      });
        console.log("data===>",this.data);
      }
    )
 

  this.apiService.getPatientOnBirthDate().subscribe(
    data => {
      console.log(data);
      //this.BDdata = data;
      for(let i=0;i<data['entry'].length;i++){
        if(data['entry'][i]['resource']['birthDate']){
          let yearofBD = data['entry'][i]['resource']['birthDate'].split('-');
          if(yearofBD[0]>=1960 && yearofBD[0]<=1965){
            this.birthdateData.push(data['entry'][i]);
          }
        }
      }
      console.log("birthdatedata===>",this.birthdateData);
    }
  )

  // this.apiService.currentdata.subscribe(dataSub=>{
  //   this.dataSubject = dataSub;
  //   if(this.dataSubject!=null){
  //     this.data.push(this.dataSubject);
  //   }
  // });
}

searchbyinput(namesearch,birthdate) {
  const dateSendingToServer = new DatePipe('en-US').transform(birthdate, 'yyyy/MM/dd')
  console.log(dateSendingToServer);
  this.apiService.searchPatient(namesearch,birthdate).subscribe(data=>{
    this.apiService.changeDataSub(data);
    this.apiService.currentdata.subscribe(dataSub=>{
         this.dataSubject = dataSub;
         if(this.dataSubject!=null){
           let newdata = [];
           newdata.push(this.dataSubject)
          this.data = newdata[0]['entry'];
        }
      });
  });
}

}
