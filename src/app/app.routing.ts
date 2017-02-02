import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerComponent } from './player/player.component';
import { MatchComponent } from './match/match.component';

const Routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'player', component: PlayerComponent },
    { path: 'match', component: MatchComponent }
];

export const appRoutes = RouterModule.forRoot(Routes);
