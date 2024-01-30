import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const CHALLENGES_AMOUNT = 100;

const routeNames = Array.from({length: CHALLENGES_AMOUNT}, (value, index) => `challenge-${index}`)

const routes: Routes = routeNames.map(routeName => ({
  path: routeName
}));

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
