import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ScoreboardComponent} from './scoreboard/scoreboard.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {GameStartComponent} from './game-start/game-start.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'scoreboard', component: ScoreboardComponent},
  {path: 'nav', component: NavBarComponent},
  {path: 'game-start', component: GameStartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
