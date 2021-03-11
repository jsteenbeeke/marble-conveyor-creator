import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-fp';

  marbles: string[] = [];

  input = '';

  updateMarbles(): void {
   this.marbles = this.input.split(' ');
   console.log('Marbles updated: ' + this.marbles.length + ' marbles present');
  }
}
