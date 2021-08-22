import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialpad-button',
  templateUrl: './dialpad-button.component.html',
  styleUrls: ['./dialpad-button.component.scss']
})
export class DialpadButtonComponent implements OnInit {
  @Input() main: string;
  @Input() letter: string;
  
  constructor() {

  }

  

  oldVAlue = '';
   
  onPress($event) {
    console.log($event)
    this.oldVAlue = $event;
  }
  ngOnInit() {
    
  }
 
}
