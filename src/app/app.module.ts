import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module'
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { HomeComponent } from './shared/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { BoldHoverDirective } from './directives/bold-hover.directive';
import { UnlessDirective } from './directives/unless.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe'

const rootRouting: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    HeaderComponent,
    BoldHoverDirective,
    UnlessDirective,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    SharedModule,
    rootRouting
    // FormsModule,
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
