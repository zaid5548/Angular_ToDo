import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';
  constructor(){
    setTimeout(() => {
      this.title="Change Title"
    }, 3000);
  }
}
