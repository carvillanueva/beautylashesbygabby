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
      <div class="container">
        <div class="col-md-4 mb-0 text-center">
            <p><img src="../favicon.ico" atl="Website Logo"></p>
            <p>&copy; 2022 beautylashesbygabby LLC</p>
            <p>Made by Carlos Villanueva</p>
        </div>
        
        <div class="col-md-4 mb-0 text-center">
            <label>Business Hours:</label>
        </div>
        
        <div class="col-md-4 text-center">

            <div class="template-demo text-center mb-2"> 
                <button class="btn btn-social-icon btn-github"><a href="https://github.com/carvillanueva" target="_blank"><i class="fab fa-github"></i></a></button> 
                <button class="btn btn-social-icon btn-linkedin"><a href="https://www.linkedin.com/in/carlosivillanueva/" target="_blank"><i class="fa fa-linkedin"></i></a></button> 
                <button class="btn btn-social-icon btn-instagram"><a href="https://instagram.com" target="_blank"><i class="fa fa-instagram"></i></a></button>
                <button data-toggle="modal" data-target="#contact" class="btn btn-social-icon btn-other "><i class="fas fa-envelope"></i></button>
                <button class="btn btn-social-icon btn-other"><a href="../assets/TEST.pdf" download="TEST.pdf"><i class="fas fa-file-pdf"></i></a></button>
            </div>
            <!-- <li class="nav-item"><a href="/" class="nav-link px-2">Services <i class="fa fa-house-user"></i></a></li>
            <li class="nav-item"><a href="#portfolio" class="nav-link px-2">Gallery <i class="fa fa-briefcase"></i></a></li>
            <li class="nav-item"><a [routerLink]="['/resume']" class="nav-link px-2">FAQs <i class="fa fa-newspaper"></i></a></li>
            <li class="nav-item"><a href="#contact" class="nav-link px-2">Policies <span class="fa fa-address-card"></span></a></li> -->
        </div>
      </div>
    </footer>
  `
})


export class FooterComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }


}
