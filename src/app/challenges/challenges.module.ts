import { NgModule } from "@angular/core";
import { Challenge1Component } from './challenge1/challenge1.component';
import { Challenge2Component } from './challenge2/challenge2.component';
import { Challenge3Component } from './challenge3/challenge3.component';

@NgModule({
  declarations: [
    Challenge1Component,
    Challenge2Component,
    Challenge3Component
  ],
  imports: [],
  exports: [
    Challenge1Component,
    Challenge2Component,
    Challenge3Component
  ]
})
export class AppChallengesModule { }