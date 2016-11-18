
import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { ProjectDetailComponent } from './views/projects/project-detail.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { GraphsComponent } from './views/graphs/graphs.component';
import { ConfigurationsComponent } from './views/configurations/configurations.component';
import { NotFoundViewComponent } from './views/not-found-view/not-found-view.component';

export const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:slug', component: ProjectDetailComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'graphs', component: GraphsComponent },
  { path: 'configuration', component: ConfigurationsComponent },
  { path: '**', component: NotFoundViewComponent },

]);
