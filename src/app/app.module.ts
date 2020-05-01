import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TypeaheadSearchComponent } from './typeahead-search/typeahead-search.component';
import { DarshboardComponent } from './darshboard/darshboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeaheadSearchComponent,
    DarshboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    TypeaheadSearchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
