import { Component, OnInit } from '@angular/core';
interface Point {
  x: number;
  y: number;
}
@Component({
  selector: 'app-challenge5',
  templateUrl: './challenge5.component.html',
  styleUrls: ['./challenge5.component.scss']
})
export class Challenge5Component implements OnInit {

  readonly revenue: number = 3621.79;
  readonly days = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];
  readonly dataRedPoints: Point[] = [
    { x: 10, y: 46 },
    { x: 50, y: 12 },
    { x: 90, y: 23 },
    { x: 130, y: 11 },
    { x: 171, y: 38 },
    { x: 240, y: 48 },
    { x: 285, y: 19 }
  ];

  readonly dataBluePoints = [
    { x: 10, y: 26 },
    { x: 50, y: 40 },
    { x: 90, y: 13 },
    { x: 130, y: 2 },
    { x: 171, y: 8 },
    { x: 240, y: 48 },
    { x: 285, y: 19 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getPolylinePoints(points: Point[]) {
    return points.map(point => `${point.x}, ${point.y}`).join(" ");
  }
}
