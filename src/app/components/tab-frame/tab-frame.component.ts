import { Component, OnInit, Input, ContentChild, QueryList, ContentChildren,AfterContentInit } from '@angular/core';
import { TabItemComponent } from '../tab-item/tab-item.component';

@Component({
  selector: 'app-tab-frame',
  templateUrl: './tab-frame.component.html',
  styleUrls: ['./tab-frame.component.scss']
})
export class TabFrameComponent implements OnInit,AfterContentInit {
  @ContentChildren(TabItemComponent) tabArray : QueryList<TabItemComponent>
  constructor() { }

  showFirstTab(){
    this.tabArray.first.isActive = true;
  }

  activateTab(tab){
    this.tabArray.forEach((item)=>{
      item.isActive = false;
    })
    tab.isActive = true;
  }

  ngOnInit(){

  }

  ngAfterContentInit() {
    this.showFirstTab();
  }
  
}
