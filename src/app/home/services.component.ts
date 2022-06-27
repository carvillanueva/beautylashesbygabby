

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'services-page',
  styles: [`
    .hero-banner {
      background-image: url('https://images.unsplash.com/photo-1503455637927-730bce8583c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
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
      height: 45px;
      position: relative;
      right: -50%;
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
          1
        </div>
        <div class="col-sm-4">
          <label>Mega Volume Set</label>
          <div class="vertical-line my-3"></div>
          <label>$115</label>
        </div>
        <div class="col-sm-4">
          3
        </div>
      </div>

      <hr>

      <div class="row col-sm-12">
        <div class="col-sm-4">
          1
        </div>
        <div class="col-sm-4">
          <label>Volume Set</label>
          <div class="vertical-line my-3"></div>
          <label>$95</label>
        </div>
        <div class="col-sm-4">
          3
        </div>
      </div>

      <hr>

      <div class="row col-sm-12">
        <div class="col-sm-4">
          1
        </div>
        <div class="col-sm-4">
          <label>Hybrid Set</label>
          <div class="vertical-line my-3"></div>
          <label>$85</label>
        </div>
        <div class="col-sm-4">
          3
        </div>
      </div>

      <hr>

      <div class="row col-sm-12">
        <div class="col-sm-4">
          1
        </div>
        <div class="col-sm-4">
          <label>Classic Set</label>
          <div class="vertical-line my-3"></div>
          <label>$75</label>
        </div>
        <div class="col-sm-4">
          3
        </div>
      </div>

      <hr class="mb-5">

      <div class="row col-xs-12">
        <div class="col-sm-6">
          <ul class="list-group">
            <li class="list-group-item bckground-pink" aria-current="true">LASH FILL INS</li>
            <li class="list-group-item">MEGA VOLUME FILL IN <span class="badge rounded-pill text-muted bckground-pink mx-2">$80</span></li>
            <li class="list-group-item">VOLUME FILL IN <span class="badge rounded-pill text-muted bckground-pink mx-2">$70</span></li>
            <li class="list-group-item">HYBRID FILL IN <span class="badge rounded-pill text-muted bckground-pink mx-2">$60</span></li>
            <li class="list-group-item">CLASSIC FILL IN <span class="badge rounded-pill text-muted bckground-pink mx-2">$50</span></li>
          </ul>
        </div>
        <div class="col-sm-6">
          <ul class="list-group">
            <li class="list-group-item bckground-pink" aria-current="true">ADD ONS</li>
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
