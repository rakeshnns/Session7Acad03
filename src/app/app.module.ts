import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
/*New exported Directive having Mouseacton.*/
import { appMouseHoverDirective } from './directives/dynamic.directive';


@NgModule({
  declarations: [
    AppComponent,
    appMouseHoverDirective /* New directive added*/
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
