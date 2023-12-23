import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thala';
  count = 0;
  isVideoPlay : any;
  head = false;
  Enterstring:any;
  constructor(){

  }
  counts(){
  this.count=this.Enterstring.length;
  if(this.count == 7)
  {
    this.isVideoPlay = true;
  }
  else if (this.count !=7)
  {
    this.head = true;
    
  }
  else 
  {
    this.isVideoPlay = false;
  }
 
  console.log(this.count);
  }
}
