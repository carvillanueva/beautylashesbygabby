
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book-page',
  styles: [`
    .hero-banner {
      background-image: url('https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 800px;
      position: relative;
      top: -350px;
    }
    .card img {
      min-height: 500px;
      max-height: 500px;
    }

  `],
  template: `
    <!-- banner -->
    <div class="hero-banner">
      <div class="container hero-text">
        <h2 class="my-3">thank you for booking with me!!</h2>
      </div>
    </div>

    <!-- appointment -->
    <div class="container col-xs-12 mb-5 after-banner-fix">
      <!-- <iframe src="https://app.squarespacescheduling.com/schedule.php?owner=26839068" title="Schedule Appointment" width="100%" height="800" frameBorder="0"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script> -->
      <!-- Start Square Appointments Embed Code --><iframe src="https://squareup.com/appointments/buyer/widget/nksqzquen6qdqj/L0ANDZF10RERJ" title="Schedule Appointment" width="100%" height="800" frameBorder="0"></iframe><script src='https://squareup.com/appointments/buyer/widget/nksqzquen6qdqj/L0ANDZF10RERJ.js'></script><!-- End Square Appointments Embed Code -->
    </div>
  `
})


export class BookComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }


}
