import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ALLOWED_NUMBERS, FINISHED_ON } from 'src/app/ui-components/challenge-renderer/challenge-renderer.constants';

@Component({
  selector: 'app-challenge-page',
  templateUrl: './challenge-page.component.html',
  styleUrls: ['./challenge-page.component.scss']
})
export class ChallengePageComponent implements OnInit {
  challengeNumber!: string;
  readonly FINISHED_ON = FINISHED_ON;
  dateOfFinishing!: string;

  constructor(private route: ActivatedRoute, private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.challengeNumber = params['id'];
      if(ALLOWED_NUMBERS.includes(this.challengeNumber)) {
        this.dateOfFinishing = this.FINISHED_ON[this.challengeNumber];
      }
    });
  }
}
