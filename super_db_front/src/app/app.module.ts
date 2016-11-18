import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { routing } from './app.routing';
import { HomeComponent } from './views/home/home.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { ProjectDetailComponent } from './views/projects/project-detail.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { GraphsComponent } from './views/graphs/graphs.component';
import { ConfigurationsComponent } from './views/configurations/configurations.component';
import { NotFoundViewComponent } from './views/not-found-view/not-found-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    CalendarComponent,
    GraphsComponent,
    ConfigurationsComponent,
    NotFoundViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
