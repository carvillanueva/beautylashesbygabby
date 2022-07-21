

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'services-page',
  styles: [`
    .hero-banner {
      background-image: url('https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fHBpbmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60');
      background-repeat: no-repeat;
      background-size: cover;
      height: 800px;
      position: relative;
      top: -300px;
    }
    .hero-text {
      text-align: center;
      position: absolute;
      top: 75%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-family: 'Courgette', cursive;
    }
    .services-list {
      max-width:1100px;
    }
    .vertical-line{
      border-left: 1px solid pink;
      height: 100px;
      position: relative;
      right: -50%;
      width: 2px;
    }
    img {
      border-radius: 15px;
      max-height: 250px;
      border: solid 2px pink;
    }

  `],
  template: `
    <!-- banner -->
    <div class="hero-banner">
      <div class="container hero-text ">
        <h2 class="my-3">SERVICES</h2>
        <p class="my-3"></p>
        <button class="btn btn-md btn-outline-secondary">BOOK YOUR APPOINTMENT</button>
      </div>
    </div>

    <div class="container text-center services-list mb-5 after-banner-fix">
      <div class="row col-sm-12">
        <div class="col-sm-4">
          <img src="../../assets/images/mega-set.jpg" width="100%;"/>
        </div>
        <div class="col-sm-4 my-auto">
          <label>Mega Volume Set</label>
          <div class="vertical-line my-3"></div>
          <label>$120</label>
        </div>
        <div class="col-sm-4 my-auto">
          <div>
            <label>Typical Time: <span>3.5 hours</span></label>
          </div>
          <hr>
          <div>
            <label>Description:</label>
            <p>Mega Volume set is the most dramatic set. 10d-16d fans are places on one natural lash!</p>
            <p class="text-muted" style="font-size: 12px;">**I will be checking to see if your lashes are strong enough to hold a mega set! If your lashes are damaged and weak I will not be able to apply a mega set. **</p>
          </div>
        </div>
      </div>

      <hr>

      <div class="row col-sm-12">
        <div class="col-sm-4">
          <img src="../../assets/images/volume-set.jpg" width="100%;"/>
        </div>
        <div class="col-sm-4 my-auto">
          <label>Volume Set</label>
          <div class="vertical-line my-3"></div>
          <label>$100</label>
        </div>
        <div class="col-sm-4 my-auto">
          <div>
            <label>Typical Time: <span>2 hours</span></label>
          </div>
          <hr>
          <div>
            <label>Description:</label>
            <p>Volume lash set gives a supper flull and fluffy look. It offers the volume you need!</p>
          </div>
        </div>
      </div>

      <hr>

      <div class="row col-sm-12">
        <div class="col-sm-4">
          <img src="../../assets/images/hybrid-set.jpg" width="100%;"/>
        </div>
        <div class="col-sm-4 my-auto">
          <label>Hybrid Set</label>
          <div class="vertical-line my-3"></div>
          <label>$90</label>
        </div>
        <div class="col-sm-4 my-auto">
          <div>
            <label>Typical Time: <span>2 hours</span></label>
          </div>
          <hr>
          <div>
            <label>Description:</label>
            <p>Hybrid lash set is a mixture of classic and volume.</p>
            <p>This is a popular set because it offers the perfect amount of fullness without being too dramatic!</p>
          </div>
        </div>
      </div>

      <hr>

      <div class="row col-sm-12">
        <div class="col-sm-4">
          <img src="../../assets/images/classic-set.jpg" width="100%;"/>
        </div>
        <div class="col-sm-4 my-auto">
          <label>Classic Set</label>
          <div class="vertical-line my-3"></div>
          <label>$80</label>
        </div>
        <div class="col-sm-4 my-auto">
          <div>
            <label>Typical Time: <span>2.5 hours</span></label>
          </div>
          <hr>
          <div>
            <label>Description:</label>
            <p>Classis sets are the most natural looking set.</p>
            <p>One lash extension is flued to one natural lash, the fullness will depend on how many natural lashes each client has!</p>
          </div>
        </div>
      </div>

      <hr class="mb-5">

      <div class="row col-xs-12">
        <div class="col-sm-6">
          <ul class="list-group">
            <li class="list-group-item bckground-pink" aria-current="true"><u>LASH FILL INS</u></li>
            <li class="list-group-item">MEGA VOLUME FILL IN <span class="badge rounded-pill text-muted bckground-pink mx-2">$80</span></li>
            <li class="list-group-item">VOLUME FILL IN <span class="badge rounded-pill text-muted bckground-pink mx-2">$70</span></li>
            <li class="list-group-item">HYBRID FILL IN <span class="badge rounded-pill text-muted bckground-pink mx-2">$60</span></li>
            <li class="list-group-item">CLASSIC FILL IN <span class="badge rounded-pill text-muted bckground-pink mx-2">$50</span></li>
          </ul>
        </div>
        <div class="col-sm-6">
          <ul class="list-group">
            <li class="list-group-item bckground-pink" aria-current="true"><u>ADD ONS</u></li>
            <li class="list-group-item">LASH REMOVAL <span class="badge rounded-pill text-muted bckground-pink mx-2">$20</span></li>
            <li class="list-group-item">ANY WISPY SETS <span class="badge rounded-pill text-muted bckground-pink mx-2">$10</span></li>
            <li class="list-group-item">SPARKLY LASHES <span class="badge rounded-pill text-muted bckground-pink mx-2">$7</span></li>
            <li class="list-group-item">COLOR LASHES <span class="badge rounded-pill text-muted bckground-pink mx-2">$7</span></li>
            <li class="list-group-item">LASH BATHS <span class="badge rounded-pill text-muted bckground-pink mx-2">$5</span></li>
            <li class="list-group-item">LASH KITS <span class="badge rounded-pill text-muted bckground-pink mx-2">$10</span></li>
          </ul>
        </div>
      </div>
    </div>
  `
})


export class ServicesComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }


}
