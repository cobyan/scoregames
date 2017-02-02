import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { appRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerComponent } from './player/player.component';
import { MatchComponent } from './match/match.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    PlayerComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
