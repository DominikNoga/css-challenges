import { NgModule } from "@angular/core";
import { Challenge1Component } from './challenge1/challenge1.component';
import { Challenge2Component } from './challenge2/challenge2.component';
import { Challenge3Component } from './challenge3/challenge3.component';
import { CommonModule } from "@angular/common";
import { Challenge4Component } from './challenge4/challenge4.component';
import { Challenge5Component } from './challenge5/challenge5.component';
import { Challenge6Component } from './challenge6/challenge6.component';

@NgModule({
  declarations: [
    Challenge1Component,
    Challenge2Component,
    Challenge3Component,
    Challenge4Component,
    Challenge5Component,
    Challenge6Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Challenge1Component,
    Challenge2Component,
    Challenge3Component,
    Challenge4Component,
    Challenge5Component,
  ],
})
export class AppChallengesModule { }
