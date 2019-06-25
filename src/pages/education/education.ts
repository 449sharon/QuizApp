import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import {DataStoreProvider} from '../../providers/data-store/data-store';
import {ResultsPage} from '../results/results';


@IonicPage()
@Component({
  selector: 'page-education',
  templateUrl: 'education.html',
})
export class EducationPage {
  @ViewChild('slides') slides: Slides;
results :number;
title: string;
questions: any;
correctEdu = ['B -12 month','C - 7 days', 'B -5' ,'A -Mount Everest','B -Nose and ears']
correctFood = ['B -South America','A-prune', 'A- fruit' ,'B -California','A -May 15, 1940']
correctTech = ['A -Flash','B -David Filo & Jerry Yang', 'D -Image file' ,'A-Database','B - System file']
correctPolitics = ['D -Julius Malema','A-Nelson Mandela', 'C -2' ,'B - 1918','B -5']
correctSports = ['B -Egypt','A-1937', 'B-India' ,'B -Uruguay','C-Jamaica']

value =0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dataStorage: DataStoreProvider) {
  }

  ionViewDidLoad() {
    this.title = this.navParams.data;
    this.questions = this.dataStorage.questions;
    
    this.slides.lockSwipeToPrev(false);
  }
  resultTotal(val){
    if (this.slides.isEnd() == false){
      // logic for calculations
      switch (this.title) {
        case 'Education':
          this.correctEdu.map( res=>{
            if (val == res){
              console.log('Correct');
              this.dataStorage.setTotal(20);
              
            } else {
              console.log('Incorrect');
            }
          })
          
          break;
        case 'Food':
            this.correctFood.map( res=>{
              if (val == res){
                console.log('Correct');
                this.dataStorage.setTotal(20);
                
              } else {
                console.log('Incorrect');
              }
            })
            break;
        case 'Technology':
            this.correctTech.map( res=>{
              if (val == res){
                console.log('Correct');
                this.dataStorage.setTotal(20);
                
              } else {
                console.log('Incorrect');
              }
            })
            break;
        case 'Politics':
            this.correctPolitics.map( res=>{
              if (val == res){
                console.log('Correct');
                this.dataStorage.setTotal(20);
                
              } else {
                console.log('Incorrect');
              }
            })
            break;
        case 'Sports':
            this.correctSports.map( res=>{
              if (val == res){
                console.log('Correct');
                this.dataStorage.setTotal(20);
                
              } else {
                console.log('Incorrect');
              }
            })
            
        default:
          break;
      }


      
    }
    this.slides.slideNext();
  }
  toTotal(){
    this.navCtrl.push(ResultsPage);
  }
}
