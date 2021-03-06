import { Component, OnInit, ViewChild, TemplateRef, HostListener} from '@angular/core';


@Component({
  selector: 'app-demo-frame',
  templateUrl: './demo-frame.component.html',
  styleUrls: ['./demo-frame.component.scss']
})
export class DemoFrameComponent implements OnInit {
  public isMobile : boolean;
  public windowWidth : number;
  public windowHeight : number;
  public appRealViewHeight : string = null;
  public syncShadow : string = null;
  
  @ViewChild('realView',{static:true}) realView : TemplateRef<any>;
  @ViewChild('shelledView',{static:true}) shelledView : TemplateRef<any>;

  constructor() {
    
  }

  getWindowHeight(){
    var shadowNull = document.getElementById('shadow-null');
    this.windowHeight = shadowNull.clientHeight;
    if(this.windowWidth<480){
      if(this.windowHeight<450){
        this.appRealViewHeight = '450px';
      }
      else{
        this.appRealViewHeight = this.windowHeight + 'px';

      }
    }
    else{
      this.appRealViewHeight = this.windowHeight + 'px';
    }

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
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    this.getWindowWidth();
    this.getWindowHeight();
    
  }

}
