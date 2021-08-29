import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngPractise';
  userName="";
  email="";
  password="";
  users=[{Username:"",Email:"",Password:""}];
  buttonClicked=false;
  
  constructor(){
      
  }

  onClick(){
    this.buttonClicked=true;
    this.users.push({Username:this.userName,Email:this.email,Password:this.password});
    
  }
}
