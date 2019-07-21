import { Component, OnInit, ViewChild, TemplateRef, HostListener} from '@angular/core';


@Component({
  selector: 'app-demo-frame',
  templateUrl: './demo-frame.component.html',
  styleUrls: ['./demo-frame.component.scss']
})
export class DemoFrameComponent implements OnInit {

  public windowWidth : number;
  public windowHeight : string;
  
  @ViewChild('realView',{static:true}) realView : TemplateRef<any>;
  @ViewChild('shelledView',{static:true}) shelledView : TemplateRef<any>;

  constructor() {
    
  }

  getWindowHeight(){
    var shadowNull = document.querySelectorAll('.shadow-null')[0];

    this.windowHeight = shadowNull.clientHeight + 'px';
  }

  getWindowWidth(){
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getWindowWidth();
    this.getWindowHeight();
  }

  ngOnInit() {
    this.getWindowWidth();
    this.getWindowHeight();

  }

}
