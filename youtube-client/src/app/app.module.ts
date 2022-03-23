import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchInputComponent } from './header/search-input/search-input.component';
import { AuthenticationComponent } from './header/authentication/authentication.component';
import { ModelsComponent } from './search/models/models.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    SearchItemComponent,
    SearchResultsComponent,
    SearchInputComponent,
    AuthenticationComponent,
    ModelsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
