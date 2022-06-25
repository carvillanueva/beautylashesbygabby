

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'services-page',
  styles: [`
    .hero-banner {
      background-image: url('https://images.unsplash.com/photo-1550005869-5fca7db35ddb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
      background-repeat: no-repeat;
      background-size: cover;
      height: 500px;
      position: relative;
    }
    .hero-text {
      text-align: center;
      position: absolute;
      top: 75%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
    }
    .services-list {
      max-width:1100px;
    }
 
  `],
  template: `
    <!-- banner -->
    <div class="hero-banner">
      <div class="container hero-text ">
        <h2 class="my-3">SERVICES</h2>
        <p class="my-3"></p>
        <button class="btn btn-md btn-outline-success">BOOK YOUR APPOINTMENT</button>
      </div>
    </div>

    <div class="container text-center services-list my-5">

      <div class="row col-sm-12">
        <div class="col-sm-3">
          1
        </div>
        <div class="col-sm-3">
          2
        </div>
        <div class="col-sm-6">
          3
        </div>
      </div>

      <hr>

      <div class="row col-sm-12">
        <div class="col-sm-6">
          3
        </div>
        <div class="col-sm-3">
          1
        </div>
        <div class="col-sm-3">
          2
        </div>
      </div>

      <hr>

      <div class="row col-sm-12">
        <div class="col-sm-3">
          1
        </div>
        <div class="col-sm-3">
          2
        </div>
        <div class="col-sm-6">
          3
        </div>
      </div>

      <hr>

      <div class="row col-sm-12">
        <div class="col-sm-6">
          3
        </div>
        <div class="col-sm-3">
          1
        </div>
        <div class="col-sm-3">
          2
        </div>
      </div>

      <hr>

    </div>
  `
})


export class ServicesComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }


}
