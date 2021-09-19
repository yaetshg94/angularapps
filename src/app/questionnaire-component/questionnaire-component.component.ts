import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup,FormBuilder,FormArray,Validators } from "@angular/forms"


@Component({
  selector: 'app-questionnaire-component',
  templateUrl: './questionnaire-component.component.html',
  styleUrls: ['./questionnaire-component.component.scss']
})
export class QuestionnaireComponentComponent implements OnInit {

  private _jsonURL = 'assets/questionnaire.json';

  dynamicJSON: any ;
  submitted : boolean = false;
  abc="";
  showData:any;
  questionFormGroup:FormGroup;

  constructor(private http: HttpClient ,private formBuilder:FormBuilder)
   { }  
  

  ngOnInit(): void {

    this.getJSON().subscribe(data => {
   
      this.dynamicJSON = data.item;

      // let questionForm = {
      //   questions: this.dynamicJSON
      // }
      this.questionFormGroup = this.formBuilder.group({
        questions: this.formBuilder.array([])
      })

      this.questionFormGroup = this.formBuilder.group({
        allergies: ['', Validators.required],
        2.1: ['', Validators.required],
        2.2:['', Validators.required],
        2.3:['', Validators.required],
        2.4:['',Validators.required],
        3.1:['',Validators.required],
        3.2:['',Validators.required]
      })

       //this.generateForm()

    })

  }

  get f() { return this.questionFormGroup.controls; }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);  
  }

  
 
  generateForm(){
    this.dynamicJSON.forEach( (t , i) =>{
      let questions =<FormArray> this.questionFormGroup.controls["questions"]; 
     questions.push(this.formBuilder.group({
      allergies :['' , Validators.required],
      2.1:['', Validators.required],
      2.2:['', Validators.required],
      2.3:['', Validators.required],
      2.4:['',Validators.required],
      3.1:['',Validators.required],      
      3.2:['',Validators.required]
     }))
    })
  }

  sortDynamicJson(){
    let newArray = this.dynamicJSON;
    let questions: any = [    ]
    newArray.forEach(element => { 
        questions.push(element)
    });
    questions.sort((a, b) => a.order - b.order);
    this.dynamicJSON = questions;
  }

  onSubmit() {
    this.submitted = true
    if(this.questionFormGroup.valid) {
   
    this.showData = this.questionFormGroup.value;

    }

  //  this.showData={
  //   "resourceType": "QuestionnaireResponse",
  //   "id": "f201",
  //   "text": {
  //     "status": "generated"
  //    },
  //   "status": "completed",
  //   "subject": {
  //     "reference": "Patient/f201",
  //     "display": "Roel"
  //   },
  //   "authored": Date.now(),
  //   "author": {
  //     "reference": "Practitioner/f201"
  //   },
  //   "source": {
  //     "reference": "Practitioner/f201"
  //   },
  //   "item": [
  //     {
  //       "linkId": "1",
  //       "item": [
  //         {
  //           "linkId": "1.1",
  //           "text": "Do you have allergies?",
  //           "answer": [
  //             {
  //               "valueString": this.questionFormGroup.value['allergies']
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       "linkId": "2",
  //       "text": "General questions",
  //       "item": [
  //         {
  //           "linkId": "2.1",
  //           "text": "What is your gender?",
  //           "answer": [
  //             {
  //               "valueString": this.questionFormGroup.value['2.1']
  //             }
  //           ]
  //         },
  //         {
  //           "linkId": "2.2",
  //           "text": "What is your date of birth?",
  //           "answer": [
  //             {
  //               "valueDate": this.questionFormGroup.value['2.2']
  //             }
  //           ]
  //         },
  //         {
  //           "linkId": "2.3",
  //           "text": "What is your country of birth?",
  //           "answer": [
  //             {
  //               "valueString": this.questionFormGroup.value['2.3']
  //             }
  //           ]
  //         },
  //         {
  //           "linkId": "2.4",
  //           "text": "What is your marital status?",
  //           "answer": [
  //             {
  //               "valueString": this.questionFormGroup.value['2.4']
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       "linkId": "3",
  //       "text": "Intoxications",
  //       "item": [
  //         {
  //           "linkId": "3.1",
  //           "text": "Do you smoke?",
  //           "answer": [
  //             {
  //               "valueString": this.questionFormGroup.value['3.1']
  //             }
  //           ]
  //         },
  //         {
  //           "linkId": "3.2",
  //           "text": "Do you drink alchohol?",
  //           "answer": [
  //             {
  //               "valueString": this.questionFormGroup.value['3.2']
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // }
    console.log(this.questionFormGroup.value)
  }
}



