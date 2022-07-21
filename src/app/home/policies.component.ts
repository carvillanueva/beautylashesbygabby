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
        <p class="my-3">please take the time to read my policies carefully.</p>
        <p class="my-3">if you have any questions, feel free to send me a message in my contact form!</p>
        <button class="btn btn-md btn-outline-secondary">BOOK YOUR APPOINTMENT</button>
      </div>
    </div>

    <div class="container mb-5 after-banner-fix mx-auto text-center">
        <div class="card-body fs-4 text-danger text-center">
          PLEASE READ MY POLOCIES CAREFULLY.
        </div>
      <div class="card col-md-5 d-inline-block m-2">
        <h5 class="card-header">Appointment Information</h5>
        <div class="card-body">
          <ul class="card-text">
            <li>All appointments <strong>require</strong> a $20 non-refundable deposit to book. This deposit will go towards the remaining balance of your appointment.
              <p class="text-danger fw-bold">No deposit = No appointment</p>
            </li>
            <li>You will have 24 hours to submit your deposit. If a deposit is not sent I will cancel your appointment.</li>
            <li></li>
          </ul>
        </div>
      </div>

      <div class="card col-md-5 d-inline-block m-2">
        <h5 class="card-header">Deposit Information</h5>
        <div class="card-body">
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>

      <div class="card col-md-5 d-inline-block m-2">
        <h5 class="card-header">Cancellations / Rescheduling</h5>
        <div class="card-body">
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>

      <div class="card col-md-5 d-inline-block m-2">
        <h5 class="card-header">Other Information</h5>
        <div class="card-body">
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>

      <div class="card col-md-5 d-inline-block m-2">
        <h5 class="card-header">Day of Appointment</h5>
        <div class="card-body">
          <ol class="card-text">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </div>
      </div>

    </div>
  `,
})
export class PoliciesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
