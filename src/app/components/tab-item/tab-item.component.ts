import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab-item',
  template:
  `
    <div class="tab-pane" *ngIf="isActive">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./tab-item.component.scss']
})
export class TabItemComponent implements OnInit {

  constructor() { }
  @Input() isActive :boolean = false;
  @Input() tabBtnStyle :string ;
  ngOnInit() {
  }

}
