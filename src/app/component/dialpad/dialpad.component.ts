import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialpad',
  templateUrl: './dialpad.component.html',
  styleUrls: ['./dialpad.component.scss']
})
export class DialpadComponent implements OnInit {
  phoneNumber: string;
  constructor() { }

  ngOnInit() {
  }

}
