import { Component, OnInit } from '@angular/core';

type AllowedAnimationClass = 'opened' | 'closed'

@Component({
  selector: 'app-challenge2',
  templateUrl: './challenge2.component.html',
  styleUrls: ['./challenge2.component.scss']
})
export class Challenge2Component implements OnInit {
  readonly CLOSED = 'closed';
  readonly OPENED = 'opened';
  animationClass!: string;

  constructor() { }

  ngOnInit(): void {
  }

  setAnimationClass = () => {
    if(typeof this.animationClass === 'undefined'){
      this.animationClass = this.CLOSED;
      return;
    }
    this.animationClass = this.animationClass === this.OPENED ? this.CLOSED : this.OPENED;
  }

  getAnimationClass = (className: string) => `${className}-${this.animationClass}`;
}
