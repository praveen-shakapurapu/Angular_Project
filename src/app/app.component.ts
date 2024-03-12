import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_clone';
  navbg:any;

  @HostListener('document:scroll') scrollover(){

    console.log(document.body.scrollTop,"scrolllength#");
    
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.navbg = {
        'background-color' : '#854588'
      }
    }
    else{
      this.navbg = {}
    }
  }
}
