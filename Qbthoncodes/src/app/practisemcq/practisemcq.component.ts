import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Multiplechoicequestion} from'../multiplechoicequestion';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-practisemcq',
  templateUrl: './practisemcq.component.html',
  styleUrls: ['./practisemcq.component.scss']
})
export class PractisemcqComponent implements OnInit {
 url:string;
 token:string;
 istaxonomyselected:boolean =false;
 mcq :Multiplechoicequestion={
  skills : "",
  taxonomy: "",
  difficultylevel:"",
  classification:"",
  Multipleanswers:"",
  topic:"",
  questionsource:"",
  questiontext:"",
  option1:"",
  option1correct:"",
  option2:"",
  option2correct:"",
  option3:"",
  option3correct:"",
  option4:"",
  option4correct:"",
  option5:"",
  option5correct:""
 };
 skills:Array<String>=[];
  constructor(http: HttpClient) {
    this.url = environment.skillsurl;
    this.token = "Bearer "+localStorage.getItem('authtoken');
  console.log(this.token);
    const  headers = new  HttpHeaders().set("Accept", "application/json").set("Authorization",this.token);
    http.get<any>(this.url ,{headers}).subscribe(data => {
      for(var i =0;i<data.length;i++){
        console.log(data[i]["name"]);
        this.skills.push(data[i]["name"]);
        //this.skills[i] = data[i]["name"];
      }
     //console.log(data[0]["name"]);
      },error =>{console.log("error")});
    
  
   }

  ngOnInit(): void {
  }
  onTaxonomySelected(options:string): void{
    if(options == "MultipleChoice" ){
      this.istaxonomyselected=  true;
      
    }
    else{
      this.istaxonomyselected=  false;
    }
  }

}
