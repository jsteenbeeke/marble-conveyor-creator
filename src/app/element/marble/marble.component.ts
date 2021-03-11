import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-marble',
  templateUrl: './marble.component.html',
  styleUrls: ['./marble.component.css']
})
export class MarbleComponent implements OnInit {
  @Input()
  private color: string;

  @Input()
  private base = 'marble';

  constructor() { }

  ngOnInit(): void {
  }

  cssClasses(): string {
    return this.base + ' ' + this.color;
  }

}
