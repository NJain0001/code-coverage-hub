import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { CodeCoverageDetailsComponent } from './code-coverage-details/code-coverage-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ProjectListComponent,
    CodeCoverageDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProjectListComponent, pathMatch: 'full' },
      { path: 'code-coverage-detail', component: CodeCoverageDetailsComponent, pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
