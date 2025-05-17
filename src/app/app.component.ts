import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { ServicesComponent } from './components/services/services.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponent,
    FooterComponent,
    ScrollToTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mbsn';
}
