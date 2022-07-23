
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gallery-page',
  styles: [`
    .hero-banner {
      background-image: url('https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 800px;
      position: relative;
      top: -300px;
    }
    .card img {
      min-height: 500px;
      max-height: 500px;
    }

  `],
  template: `
    <!-- banner -->
    <div class="hero-banner">
      <div class="container hero-text ">
        <h2 class="my-3">GALLERY</h2>
        <p class="my-3"></p>
        <button class="btn btn-md btn-outline-light my-3">BOOK YOUR APPOINTMENT HERE!!</button>
      </div>
    </div>


    <div class="container col-xs-12 mb-5 after-banner-fix">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src="../../assets/images/gallery/tip-pic1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Lash Tips</h5>
              <p class="card-text">Tips to come prepared for your lash appointment! Please remember to read my <a href="#policy-page">policies</a> before coming!</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="../../assets/images/gallery/client1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Client Spotlight</h5>
              <p class="card-text">A classic set makes everyone look fabulous!!</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="../../assets/images/gallery/client2.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Client Spotlight</h5>
              <p class="card-text">A hybrid set on these pretty eyes!!</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="../../assets/images/gallery/heart-lashRoom.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Valentine Lash Room</h5>
              <p class="card-text">My lash room Valentine set up! Pink on Pink on Pink :))</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="../../assets/images/gallery/tip-pic2.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Lash Tips!</h5>
              <p class="card-text">Remember to clean your lashes to keep them pretty and strong!</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="../../assets/images/gallery/spooky-lashRoom.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Halloween Lash Room</h5>
              <p class="card-text">A little spooky season set up!!!</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="../../assets/images/gallery/client3.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Client Spotlight</h5>
              <p class="card-text">Add a little sparkly lash to your next set!! Volume set (11-14) pink sparkly lash!</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="../../assets/images/gallery/cleint4.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Client Spotlight</h5>
              <p class="card-text">Hot girl summer lashes!! Wispy Hybrid: (11mm-14mm) splikes (13-17)</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="../../assets/images/gallery/tip-pic3.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Lash Tips!</h5>
              <p class="card-text">Keep your lashes clean!!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
})


export class GalleryComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }


}
