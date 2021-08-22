import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './app.material.module';
import { AppComponent } from './app.component';
import { DialpadButtonComponent } from './component/dialpad-button/dialpad-button.component';
import { DialpadComponent } from './component/dialpad/dialpad.component';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DialpadButtonComponent,
    DialpadComponent,
    PhoneNumberPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
