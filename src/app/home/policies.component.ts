import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'policies-page',
  styles: [`
    .hero-banner {
      background-image: url('https://images.unsplash.com/photo-1582794543462-0d7922e50cf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80');
      background-position: center;
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
  `,
  ],
  template: `
    <!-- banner -->
    <div class="hero-banner">
      <div class="container hero-text ">
        <h2 class="my-3">POLICIES</h2>
        <p class="my-3">PLEASE READ CAREFULLY!</p>
        <button class="btn btn-md btn-outline-success">BOOK YOUR APPOINTMENT</button>
      </div>
    </div>
  `,
})
export class PoliciesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
