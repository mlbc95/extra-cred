import { Component, OnInit } from '@angular/core';
import { trigger, keyframes, style, transition, animate, query, state } from '@angular/animations';
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  animations: [
    trigger('spinner', [
      state('void', style({opacity: 0})),
      state('in', style({opacity: 1})),
      transition('void => in', animate('0.3s ease-in-out')),
      transition('in => void', animate('0.3s ease-in-out'))
    ])
  ]
})
export class SpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
