import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UpdateComponentComponent} from './components/update-component/update-component.component';
import {ApprovingComponentComponent} from './components/approving-component/approving-component.component';
import {ViewingComponentComponent} from './components/viewing-component/viewing-component.component';
import {BaseService} from './services/base.service';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    UpdateComponentComponent,
    ApprovingComponentComponent,
    ViewingComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
