import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab-item',
  template:
  `
    <div class="tab-pane" *ngIf="isActive">
      <ng-content></ng-content>
    </div>
  `,
  styles:[
    `
    :host{
      height:100%;
    }
    .tab-pane{
      animation:fadeIn 1s;
      height:100%;
    }
    `
  ]

  

})
export class TabItemComponent implements OnInit {

  constructor() { }
  @Input() isActive :boolean = false;
  @Input() tabBtnStyle :string ;
  ngOnInit() {
  }

}
