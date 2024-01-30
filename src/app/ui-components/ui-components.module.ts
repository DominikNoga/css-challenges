import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChallengeRendererComponent } from './challenge-renderer/challenge-renderer.component';
import { ChallengeTileComponent } from './challenge-tile/challenge-tile.component';
import { ChallengeTileListComponent } from './challenge-tile-list/challenge-tile-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ChallengeRendererComponent,
    ChallengeTileComponent,
    ChallengeTileListComponent
  ],
  imports: [],
  exports: [
    HeaderComponent,
    FooterComponent,
    ChallengeRendererComponent
  ]
})
export class AppUiComponentsModule { }
