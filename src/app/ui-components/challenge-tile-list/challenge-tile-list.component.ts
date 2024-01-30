import { Component, OnInit } from '@angular/core';
import { ALLOWED_NUMBERS } from '../challenge-renderer/challenge-renderer.constants';

@Component({
  selector: 'app-challenge-tile-list',
  templateUrl: './challenge-tile-list.component.html',
  styleUrls: ['./challenge-tile-list.component.scss']
})
export class ChallengeTileListComponent implements OnInit {
  readonly ALLOWED_NUMBERS = ALLOWED_NUMBERS;

  constructor() { }

  ngOnInit(): void {
  }

}
