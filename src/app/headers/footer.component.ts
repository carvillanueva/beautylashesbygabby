import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-footer',
  styles: [`
    footer {
      padding-top: 100px;
      padding-bottom: 100px;
      background-color: #fdeff9;;
      color:white;
      font-family: 'Domine', serif;
    }
    a {
      color: white;
    }
    a:hover {
      color: grey;
    }
    table {
      font-size: 12px;
      line-height: 10px;
    }
    ul {
      list-style-type: none;
      padding-left: 0px;
    }
    ul li {
      line-height: 35px;
    }
  `],
  template: `
    <footer>
      <div class="container row text-muted mx-auto">
        <div class="col-md-4 text-center">
          <p><img src="../favicon.ico" atl="Website Logo"></p>
          <p>&copy; 2022 beautylashesbygabby LLC</p>
          <p>Made by Carlos Villanueva</p>
          <div class="template-demo text-center mb-2"> 
            <button class="btn btn-social-icon btn-github"><a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i></a></button> 
            <button class="btn btn-social-icon btn-linkedin"><a href="https://tiktok.com/" target="_blank"><i class="fa-brands fa-tiktok"></i></a></button> 
            <button class="btn btn-social-icon btn-instagram"><a href="https://instagram.com" target="_blank"><i class="fa fa-instagram"></i></a></button>
          </div>
        </div>
        
        <div class="col-md-4 text-center">
          <label>Business Hours:</label>
          <table class="table table-condensed table-borderless text-center">
            <tbody>
              <tr>
                <td>Monday</td>
                <td>8am-5pm</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>8am-5pm</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>8am-5pm</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>8am-5pm</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>8am-5pm</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>8am-5pm</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>Off</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="col-md-4 text-center my-auto">
          <label class="form-label" >Navigation</label>
          <table class="table table-condensed table-borderless text-center lh-lg fs-6">
            <tbody>
              <tr>
                <td><a class="text-decoration-none text-muted" [routerLink]="['services']">Services</a></td>
                <td><a class="text-decoration-none text-muted" [routerLink]="['questions']">FAQs</a></td>
              </tr>
              <tr>
                <td><a class="text-decoration-none text-muted" [routerLink]="['gallery']">Gallery</a></td>
                <td><a class="text-decoration-none text-muted" [routerLink]="['policies']">Policies</a></td>
              </tr>
            </tbody>
          </table>
          <!-- <ul>
            <li><a class="text-decoration-none text-muted" [routerLink]="['services']">Services</a></li>
            <li><a class="text-decoration-none text-muted" [routerLink]="['gallery']">Gallery</a></li>
            <li><a class="text-decoration-none text-muted" [routerLink]="['questions']">FAQs</a></li>
            <li><a class="text-decoration-none text-muted" [routerLink]="['policies']">Policies</a></li>
            <li><a class="text-decoration-none text-muted" [routerLink]="['/']">Book Now!</a></li>
          </ul> -->
        </div>
      </div>
    </footer>
  `
})


export class FooterComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }


}
