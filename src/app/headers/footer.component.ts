import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-footer',
  styles: [`
    footer {
      padding-top: 100px;
      padding-bottom: 100px;
      background-color: #FFCFF2;
      color:white;
    }
    a {
      color: white;
    }
    a:hover {
      color: grey;
    }
  `],
  template: `
    <footer >
      <div class="container d-flex flex-wrap justify-content-between align-items-center">
        <div class="col-md-4 mb-0 ">
          <p>&copy; 2022 Villanueva, Inc</p>
          <p >Made by Carlos Villanueva</p>
        </div>
        
        <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <img src="../favicon.ico" atl="Website Logo">
        </a>
        
        <ul class="nav col-md-4 justify-content-md-end justify-content-center">
          <li class="nav-item"><a href="/" class="nav-link px-2">Services <i class="fa fa-house-user"></i></a></li>
          <li class="nav-item"><a href="#portfolio" class="nav-link px-2">Gallery <i class="fa fa-briefcase"></i></a></li>
          <li class="nav-item"><a [routerLink]="['/resume']" class="nav-link px-2">FAQs <i class="fa fa-newspaper"></i></a></li>
          <li class="nav-item"><a href="#contact" class="nav-link px-2">Policies <span class="fa fa-address-card"></span></a></li>
        </ul>
      </div>
    </footer>
  `
})


export class FooterComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }


}
