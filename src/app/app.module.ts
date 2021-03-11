import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConveyorComponent } from './element/conveyor/conveyor.component';
import { MarbleComponent } from './element/marble/marble.component';
import { BoxComponent } from './element/box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    ConveyorComponent,
    MarbleComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
