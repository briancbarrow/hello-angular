import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BoldHoverDirective } from './directives/bold-hover.directive';
import { UnlessDirective } from './directives/unless.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoldHoverDirective,
    UnlessDirective,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    SharedModule
    // FormsModule,
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
