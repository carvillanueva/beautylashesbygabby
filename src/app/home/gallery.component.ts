
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
    .hero-text {
      text-align: center;
      position: absolute;
      top: 75%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-family: 'Courgette', cursive;
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
        <button class="btn btn-md btn-outline-secondary">BOOK YOUR APPOINTMENT</button>
      </div>
    </div>


    <div class="container col-xs-12 mb-5 after-banner-fix">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src="../../assets/images/gallery/tip-pic1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Lash Tips</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="../../assets/images/gallery/client1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Client Spotlight</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="../../assets/images/gallery/client2.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Client Spotlight</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="../../assets/images/gallery/heart-lashRoom.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Valentine Lash Room</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="../../assets/images/gallery/tip-pic2.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Lash Tips!</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="../../assets/images/gallery/spooky-lashRoom.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Halloween Lash Room</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="../../assets/images/gallery/client3.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="../../assets/images/gallery/cleint4.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="../../assets/images/gallery/tip-pic3.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Lash Tips!</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
