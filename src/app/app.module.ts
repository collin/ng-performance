import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponentComponent } from './simple-component/simple-component.component';
import { DeepTreeComponent } from './deep-tree/deep-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponentComponent,
    DeepTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
