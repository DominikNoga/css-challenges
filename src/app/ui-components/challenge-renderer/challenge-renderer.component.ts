import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-renderer',
  templateUrl: './challenge-renderer.component.html',
  styleUrls: ['./challenge-renderer.component.scss']
})
export class ChallengeRendererComponent implements OnInit {
  @Input() challengeNumber!: number;
  
  constructor() { }

  ngOnInit(): void {
  }
}
