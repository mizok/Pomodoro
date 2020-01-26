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
  public timerWidth:string=null;
  public fontSizeBase:number=null;
  public mainFontSize:string = null;
  public viceFontSize:string = null;
  
  constructor(private cdr: ChangeDetectorRef) { }
  getTimerShape(){

     let _timerWHConst = null;
     let windowRatio = document.getElementById('shadow-null').clientWidth/document.getElementById('shadow-null').clientHeight;

     if(windowRatio>=0.9){
        this.timerHeight = null;
        // this.timerWidth= this.timer.nativeElement.clientHeight+'px';
        console.log("TCL: TimeComponent -> getTimerShape -> this.timer.nativeElement.clientHeight", this.timer.nativeElement.clientHeight);
        if(this.timer.nativeElement.clientHeight>250){
          this.timerWidth= this.timer.nativeElement.clientHeight + 'px';
        }
        else{
          this.timerWidth = '250px';
        }
        _timerWHConst = parseFloat(this.timerWidth);
     }
     else{
        this.timerWidth = null;
        this.timerHeight= this.timer.nativeElement.clientWidth+'px';
        _timerWHConst = parseFloat(this.timerHeight);
     }

     
     
     this.fontSizeBase = _timerWHConst/375;
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
