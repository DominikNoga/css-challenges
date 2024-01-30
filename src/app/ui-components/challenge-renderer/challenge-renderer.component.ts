import { Component, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ALLOWED_NUMBERS, COMPONENT_MAP } from './challenge-renderer.constants';
import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import { NoSuchChallengeComponent } from '../no-such-challenge/no-such-challenge.component';

@Component({
  selector: 'app-challenge-renderer',
  templateUrl: './challenge-renderer.component.html',
  styleUrls: ['./challenge-renderer.component.scss']
})
export class ChallengeRendererComponent implements OnInit {
  @Input() challengeNumber!: string;
  readonly COMPONENT_MAP = COMPONENT_MAP;
  challengeToRender!: ComponentRef<any>;
  @ViewChild('vcr', { static: true, read: ViewContainerRef })
  vcr!: ViewContainerRef;

  constructor() { }

  ngOnInit(): void {
    this.setChallengesToRedner();
  }

  private setChallengesToRedner = (): void => {
    if(ALLOWED_NUMBERS.includes(this.challengeNumber)){
      this.challengeToRender = this.vcr.createComponent(this.COMPONENT_MAP[this.challengeNumber]);
    } 
    else {
      this.challengeToRender = this.vcr.createComponent(NoSuchChallengeComponent);
    }
  }
}
