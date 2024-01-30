import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-tile',
  templateUrl: './challenge-tile.component.html',
  styleUrls: ['./challenge-tile.component.scss']
})
export class ChallengeTileComponent implements OnInit {
  @Input() challengeNumber!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
