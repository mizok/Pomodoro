import { Component, OnInit, ViewChild, TemplateRef, HostListener} from '@angular/core';

@Component({
  selector: 'app-demo-frame',
  templateUrl: './demo-frame.component.html',
  styleUrls: ['./demo-frame.component.scss']
})
export class DemoFrameComponent implements OnInit {

  public windowWidth : number;
  @ViewChild('realView',{static:true}) realView : TemplateRef<any>;
  @ViewChild('shelledView',{static:true}) shelledView : TemplateRef<any>;

  constructor() { }

  getWindowWidth(){
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getWindowWidth();
  }

  ngOnInit() {
    this.getWindowWidth();
  }

}
