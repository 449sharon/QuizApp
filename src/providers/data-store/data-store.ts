import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataStoreProvider {
  questions: any;
  grandTotal: number = 0;
  constructor(public http: HttpClient) {
    console.log('Hello DataStoreProvider Provider');
  }
  setTotal(val){
    this.grandTotal =this.grandTotal + val;
  }
  getQuestions(Qs){  
    this.questions = Qs;
  }
  reset(){
    this.grandTotal=0;
  }
}
