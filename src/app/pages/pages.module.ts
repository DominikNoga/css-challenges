import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { ChallengePageComponent } from './challenge-page/challenge-page.component';
import { AppUiComponentsModule } from '../ui-components/ui-components.module';

@NgModule({
    declarations: [
        HomePageComponent,
        ChallengePageComponent
    ],
    imports: [
        AppUiComponentsModule
    ],
    exports: []
})
export class AppPagesModule { }
