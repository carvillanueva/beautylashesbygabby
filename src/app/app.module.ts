import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './headers/footer.component';
import { HeaderComponent } from './headers/header.component';
import { BookComponent } from './home/book.component';
import { GalleryComponent } from './home/gallery.component';
import { MainPageComponent } from './home/mainPage.component';
import { PoliciesComponent } from './home/policies.component';
import { QuestionsComponent } from './home/questions.component';
import { ServicesComponent } from './home/services.component';
import { ToTheTopComponent } from './toTheTop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    ServicesComponent,
    PoliciesComponent,
    QuestionsComponent,
    GalleryComponent,
    BookComponent,
    ToTheTopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'main', component: MainPageComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'policies', component: PoliciesComponent },
      { path: 'questions', component: QuestionsComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'book', component: BookComponent },
      { path: '', component: MainPageComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
