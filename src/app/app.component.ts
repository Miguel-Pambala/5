import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic5';
  isChecked = false;

  onCheckboxChange() {
    this.isChecked = !this.isChecked;
  }
}
