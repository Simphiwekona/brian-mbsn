import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./components/about/about.component";
import { FooterComponent } from "./components/footer/footer.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { HeaderComponent } from "./components/header/header.component";
import { ScrollToTopComponent } from "./components/scroll-to-top/scroll-to-top.component";
import { ServicesComponent } from "./components/services/services.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }