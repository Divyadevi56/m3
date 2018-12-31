import { Component } from '@angular/core';
import { style } from '../../node_modules/@angular/core/src/animation/dsl';

@Component({
  selector: 'my-app',
 template: `<h1>Helo {{name}}</h1><h1> Welcome {{name}}</h1>,<div [style.color]="mycolor">Super!!</div>
 <input type='text' class='bg'/>
 <input type='text' [ngStyle]="myStyle"/>
 <button (click)="changeColor()">click</button>
 <input type='text' value='{{value}}'/>
 <button (click)="clickB()">click</button>`,
   
 // templateUrl: './app.component.html',
  styleUrls:['./app.component.css'],
  styles:['.box{ color:blue}']
})
export class AppComponent  { 
  
  name = 'Divya';
 mycolor='yellow';
 
 myStyle={
   'color':'red',
   'background-color':'blue',
 }
 changeColor()
 {
   this.mycolor=this.mycolor==='blue'? 'red':'blue';
 }
 value:string='hello';
clickB()
{
  this.value=this.value==='clicked'?'clicked again':'clicked';
}

}
