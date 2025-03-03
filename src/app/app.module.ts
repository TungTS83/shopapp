import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
