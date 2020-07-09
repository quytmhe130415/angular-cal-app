import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  result: string = '';
  longButtons: string[] = ['AC', 'CE'];
  buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', '=', '+'];

  private prevValue: string = '';
  private curValue: string = '';

  addToExpression(value: string) {
    if (this.result != '') {
      this.prevValue = this.curValue;
      this.curValue = value;
      console.log(this.curValue);

    }
    if (value == 'AC') {
      this.result = '';
    } else if (value == 'CE') {
      this.result = this.prevValue != '=' ? this.result.slice(0,-1) : this.result;
    } else if (value == '=') {
      // console.log('Result tam' + this.result);
      this.result = eval(this.result);
    } else {
      this.result += value;
     }
  }
}
