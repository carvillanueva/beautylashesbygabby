import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'policies-page',
  styles: [`
    .hero-banner {
      background-image: url('https://images.unsplash.com/photo-1516642898673-edd1ced08e87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
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
  `,
  ],
  template: `
    <!-- banner -->
    <div class="hero-banner">
      <div class="container hero-text ">
        <h2 class="my-3">POLICIES</h2>
        <p class="my-3">PLEASE READ CAREFULLY!</p>
        <button class="btn btn-md btn-outline-secondary">BOOK YOUR APPOINTMENT</button>
      </div>
    </div>

    <div class="container text-center mb-5 after-banner-fix"></div>
  `,
})
export class PoliciesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
