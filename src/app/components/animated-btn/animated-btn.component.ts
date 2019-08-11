import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-animated-btn',
  templateUrl: './animated-btn.component.html',
  styleUrls: ['./animated-btn.component.scss']
})
export class AnimatedBtnComponent implements OnInit {
  @Input() btnStyle :string = null;
  @Input() isActive :boolean = false;
  constructor() { }
  ngOnInit() {

  }

}
