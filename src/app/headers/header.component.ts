import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-header',
  styles: [`
    .nav-masthead .nav-link {
      color: slategrey;
      border-bottom: 2px solid transparent;
    }
    .nav-masthead .nav-link:hover,
    .nav-masthead .nav-link:focus {
      border-bottom-color: hotpink;
      color: white;
    }
    .nav-masthead .nav-link + .nav-link {
      margin-left: 1rem;
    }
    .book-btn {
        border: solid 2px hotpink;
        border-radius: 5px;
    }
  `],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color:#FFCFF2;">
      <div class="container">
        <a class="py-2 navbar-brand" [routerLink]="['']"><img src="../favicon.ico" atl="Website Logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup" >
          <div class="navbar-nav nav-masthead mx-auto text-center">
            <a class="mx-5 nav-link" [routerLink]="['/']">Services</a>
            <a class="mx-5 nav-link" [routerLink]="['/']">Gallery</a>
            <a class="mx-5 nav-link" [routerLink]="['/']">FAQs</a>
            <a class="mx-5 nav-link" [routerLink]="['/']">Policies</a>
            <a class="mx-5 nav-link book-btn" [routerLink]="['/']">Book Now!</a>
          </div>
        </div>
      </div>
    </nav>
  `
})


export class HeaderComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }


}
