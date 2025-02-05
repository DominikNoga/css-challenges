import { NgModule } from "@angular/core";
import { Challenge1Component } from './challenge1/challenge1.component';
import { Challenge2Component } from './challenge2/challenge2.component';
import { Challenge3Component } from './challenge3/challenge3.component';
import { CommonModule } from "@angular/common";
import { Challenge4Component } from './challenge4/challenge4.component';
import { Challenge5Component } from './challenge5/challenge5.component';
import { Challenge6Component } from './challenge6/challenge6.component';
import { Challenge7Component } from './challenge7/challenge7.component';
import { Challenge8Component } from './challenge8/challenge8.component';
import { Challenge9Component } from './challenge9/challenge9.component';
import { Challenge10Component } from './challenge10/challenge10.component';
import { Challenge11Component } from './challenge11/challenge11.component';
import { Challenge12Component } from './challenge12/challenge12.component';

@NgModule({
  declarations: [
    Challenge1Component,
    Challenge2Component,
    Challenge3Component,
    Challenge4Component,
    Challenge5Component,
    Challenge6Component,
    Challenge7Component,
    Challenge8Component,
    Challenge9Component,
    Challenge10Component,
    Challenge11Component,
    Challenge12Component
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
