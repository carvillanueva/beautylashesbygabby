import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'policies-page',
  styles: [`
    .hero-banner {
      background-image: url('https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 800px;
      position: relative;
      top: -350px;
    }
    .card-header {
      background-color: rgba(255,192,203,.5)
    }
    ol li {
      line-height: 30px;
    }
    .card {
      display: inline-flex;
    }
  `,
  ],
  template: `
    <!-- banner -->
    <div class="hero-banner">
      <div class="container hero-text ">
        <h2 class="my-3">policies</h2>
        <p class="my-3"></p>
        <button class="btn btn-md btn-outline-light my-3" [routerLink]="['/book']">BOOK YOUR APPOINTMENT HERE!!</button>
      </div>
    </div>

    <div class="container mb-5 after-banner-fix mx-auto text-center" id="#policy-page">
      <div class="card-body fs-4 text-danger text-center">
        PLEASE READ MY POLICIES CAREFULLY.
      </div>
      <div class="card col-md-5 m-2">
        <h5 class="card-header">Appointment Information</h5>
        <div class="card-body">
          <ul class="card-text">
            <li>All appointments <strong>require</strong> a $25 non-refundable deposit to book. Please send your deposit before booking. This deposit will go towards the remaining balance of your appointment.
              <p class="text-danger fw-bold">No deposit = No appointment</p>
              <p class="fw-bold" style="color:hotpink">10 min late = $10 late fee.</p>
              <p class="fw-bold" style="color:hotpink">15 min late = Canceled Appointment</p>
            </li>
            <li>Balance after deposit <strong>MUST</strong> be paid in CASH. You may pay the remaining with card <strong>BUT</strong> will be charged a $10 service fee.</li>
            <li>Appointments are first come first serve. Im sorry, but I get a lot of requests and this is the fairest way of doing things.</li>
          </ul>
        </div>
      </div>

      <div class="card col-md-5 m-2">
        <h5 class="card-header">Cancellations / Rescheduling / No Show</h5>
        <div class="card-body">
          <label class="fw-bold text-danger"><u>Cancelling</u></label>
          <p class="card-text">
            If you wish to cancel your appointment, please cancel within 48 hours of your appointment.
            Failure to cancel within the time will result in you losing your deposit.
          </p>
        </div>

        <div class="card-body">
          <label class="fw-bold text-danger"><u>Rescheduling</u></label>
          <p class="card-text">
            You are only allowed to reschedule once with the same deposit.
            Please rescheudle within 48 hours of your appointment.
            I understand life happens so please let me know asap if you need to reschedule.
            Failure to do so will result in you losing your deposit.
          </p>
        </div>

        <div class="card-body">
          <label class="fw-bold text-danger"><u>No Show 👎 </u></label>
          <div class="card-text">
            Please dont waste my time. There are other girls who wanted that spot too.
            I am very understanding. Please communicate with me.
            <p class="text-danger fw-bold">No show = Blocked from booking with me </p>
            <p class="text-danger fw-bold">50% Service Fee for no shows! </p>
          </div>
        </div>
      </div>

      <div class="card col-md-5 m-2">
        <h5 class="card-header">Other Information</h5>
        <div class="card-body">
          <ul class="card-text">
            <li>I do not allow extra guest/kids in my lash studio. I am willing to accomodate under certain circumstances. <a class="text-muted" href="#contact">Please send me a message if you need accomodations.</a></li>
            <li>All baddies <strong>must arrive with a mask and must keep it on throughout the service</strong>. I will no longer provide extra masks.</li>
            <li>Please know I do not work on other lash techs work!</li>
            <li>I do not rush my work! I will try my very best to give you the set you want! I will not let any baddie leave without being satisfied!🤍🤍</li>
          </ul>
        </div>
      </div>

      <div class="card col-md-5 m-2">
        <h5 class="card-header">Day of Appointment</h5>
        <div class="card-body">
          <ol class="card-text">
            <li>Please remember to wear a mask during your appointment.</li>
            <li>Remember I do not allow extra guests.</li>
            <li>Go to the restroom before arriving. You will be laying for the duration of the service.</li>
            <li>Remove all makeup before arriving. Arrive with a clean face.</li>
            <li>Wear comfy clothes and bring headphone - whatever makes you comfortable.</li>
            <li>Please arrive on time.</li>
            <li>When arriving to my studio, I would greatly appreciate it if you sent me an insta DM letting me know you have arrived.</li>
            <li>Come prepared to look fabulous after!!</li>
          </ol>
        </div>
      </div>

      <a href="#contact" class="text-decoration-none">
        <div class="card">
          <div class="card-body text-center text-dark bg-danger bg-opacity-10 border border-danger rounded-end">
            You must follow by these policies. I understand there are some things that are out of our control. Send me a message if you have any questions or concerns.
            <u>Contact me here!</u>
          </div>
        </div>
      </a>
    </div>
  `,
})
export class PoliciesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
