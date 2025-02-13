import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { ChallengePageComponent } from './challenge-page/challenge-page.component';
import { AppUiComponentsModule } from '../ui-components/ui-components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        HomePageComponent,
        ChallengePageComponent
    ],
    imports: [
        AppUiComponentsModule,
        FontAwesomeModule
    ],
    exports: []
})
export class AppPagesModule { }
