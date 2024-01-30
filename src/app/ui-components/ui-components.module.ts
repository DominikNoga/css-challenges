import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChallengeRendererComponent } from './challenge-renderer/challenge-renderer.component';
import { ChallengeTileComponent } from './challenge-tile/challenge-tile.component';
import { ChallengeTileListComponent } from './challenge-tile-list/challenge-tile-list.component';
import { NoSuchChallengeComponent } from './no-such-challenge/no-such-challenge.component';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ChallengeRendererComponent,
    ChallengeTileComponent,
    ChallengeTileListComponent,
    NoSuchChallengeComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ChallengeRendererComponent,
    ChallengeTileComponent,
    ChallengeTileListComponent,
    NoSuchChallengeComponent
  ]
})
export class AppUiComponentsModule { }
