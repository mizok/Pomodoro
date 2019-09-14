import { Component, OnInit,ViewChild,ElementRef,AfterViewChecked,ChangeDetectorRef,HostListener} from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss','../pane-style.scss']
})
export class TimeComponent implements OnInit,AfterViewChecked{
  @ViewChild('timerEle',{static:true}) timer : ElementRef;
  // public timerWidth:number=null;
  public timerHeight:string=null;
  public fontSizeBase:number=null;
  public mainFontSize:string = null;
  public viceFontSize:string = null;
  
  constructor(private cdr: ChangeDetectorRef) { }
  getTimerShape(){
     this.timerHeight= this.timer.nativeElement.clientWidth+'px';
     let _timerWidth = this.timer.nativeElement.clientWidth;
     this.fontSizeBase = _timerWidth/375;
     this.mainFontSize =this.fontSizeBase*100+'px';
     this.viceFontSize =this.fontSizeBase*50+'px';
     this.cdr.detectChanges();
  }
  ngOnInit() {
    // this.getTimerShape();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getTimerShape();
  }
  ngAfterViewChecked() {
   this.getTimerShape();
  }

}
