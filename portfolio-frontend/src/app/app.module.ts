import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//angularfire2
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//services
import { PortfolioService } from './services/portfolio.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { PortfolioFormComponent } from './admin/portfolio-form/portfolio-form.component';
import { PortfolioListComponent } from './admin/portfolio-list/portfolio-list.component';
import { AboutComponent } from './about/about.component';
import { TagsFormComponent } from './admin/tags-form/tags-form.component';
import { TagsListComponent } from './admin/tags-list/tags-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    ErrorComponent,
    ContactComponent,
    NavigationComponent,
    AdminHomeComponent,
    PortfolioFormComponent,
    PortfolioListComponent,
    AboutComponent,
    TagsFormComponent,
    TagsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    PortfolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
