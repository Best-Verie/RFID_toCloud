import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPipe } from './pipes/card.pipe';
import { CardDirective } from './directives/card.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardPipe,
    CardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
