import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InfoComponent } from './info/info.component';

export const routes: Routes = [
    { path: '', component: AboutUsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'info', component: InfoComponent }
];
