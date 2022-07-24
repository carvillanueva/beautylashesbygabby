import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-header',
  styles: [`
    nav {
      background-color: transparent;
      z-index: 999;
    }
    .nav-masthead .nav-link {
      color: slategrey;
      font-size: 15px;
      border-bottom: 2px solid transparent;
      font-weight: 600;
    }
    .nav-masthead .nav-link:hover,
    .nav-masthead .nav-link:focus {
      border-bottom-color: hotpink;
      color: black;
    }
    .nav-masthead .nav-link + .nav-link {
      margin-left: 1rem;
    }
    .beauty-logo {
      width:100px;
      height:100px;
      border-radius: 50%;
    }
  `],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light py-3">
      <div class="container">
        <!-- <a class="py-2 navbar-brand" [routerLink]="['main']"><img src="../favicon.ico" atl="Website Logo"></a> -->
        <a class="py-2 navbar-brand" [routerLink]="['main']"><img class="beauty-logo" src="../assets/images/beauty-logo.jpg" atl="Website Logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup" >
          <div class="navbar-nav nav-masthead mx-auto text-center">
            <a class="mx-5 nav-link" [routerLink]="['services']">Services</a>
            <a class="mx-5 nav-link" [routerLink]="['gallery']">Gallery</a>
            <a class="mx-5 nav-link" [routerLink]="['questions']">FAQs</a>
            <a class="mx-5 nav-link" [routerLink]="['policies']">Policies</a>
            <a class="mx-5 nav-link book-btn" [routerLink]="['/']">Book Now!</a>
          </div>
        </div>
        <div class="text-center d-none d-sm-inline">
          <div class="socials mx-2 d-inline-block"><a href="https://facebook.com" target="_blank"><i class="fa-brands fa-facebook text-muted"></i></a></div>
          <div class="socials mx-2 d-inline-block"><a href="https://tiktok.com" target="_blank"><i class="fa-brands fa-tiktok text-muted"></i></a></div>
          <div class="socials mx-2 d-inline-block"><a href="https://instagram.com" target="_blank"><i class="fa fa-instagram text-muted"></i></a></div>
        </div>
      </div>
    </nav>
  `
})


export class HeaderComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }


}
