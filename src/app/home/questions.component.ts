

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question-page',
  styles: [`
  .hero-banner {
    background-image: url('https://images.unsplash.com/photo-1570475735025-6cd1cd5c779d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 800px;
    position: relative;
    top: -350px;
  }

  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    outline: none;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  section#faqs {
    background: #fdfdfd;
    min-height: 100vh;
    padding: 60px 0;
  }
  .section-title {
    text-align: center;
    margin-bottom: 50px;
  }
  .section-title h2 {
    margin: 0 0 10px;
    font-style: italic;
    color: hotpink;
  }
  .separator {
    background-color: pink;
    border: 1px solid pink;
    display: block;
    height: 5px;
    margin: 0 auto;
    position: relative;
    width: 60px;
  }
  .separator::after {
    background: hotpink;
    content: '';
    height: 5px;
    left: -1px;
    position: absolute;
    top: -1px;
    width: 30px;
  }
  .card {
    border: none;
    background: #fff;
    -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    -ms-box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    border-radius: 5px !important;
    overflow: hidden;
  }
  .card + .card {
    margin-top: 30px;
  }
  .card-header {
    padding: 0px;
    background: #fff;
    border: none;
  }
  .card:hover {
    color: hotpink;
    cursor: pointer;
  }
  .card-header h4 {
    margin: 0;
    padding: 25px 45px 25px 25px;
    cursor: pointer;
    position: relative;
    font-size: 20px;
    font-weight: 700;
  }
  .card-body p {
    padding-left: 10px;
    padding-right: 10px;
  }

`,
],
template: `
  <!-- banner -->
  <div class="hero-banner">
    <div class="container hero-text ">
      <h2 class="my-3">FAQs</h2>
      <p class="my-3"></p>
      <button class="btn btn-md btn-outline-light my-3">BOOK YOUR APPOINTMENT HERE!!</button>
    </div>
  </div>
  <div class="container mb-5 after-banner-fix">
    <div class="section-title">
      <h2 class="">Frequently Asked Questions</h2>
      <div class="separator"></div>
    </div>
    <div class="row">
      <div class="col-md-8 offset-md-2">
          <div class="card">
            <div class="card-header">
              <h4>Q - How long do these appointments last?</h4>
            </div>
            <div class="card-body">
              <p> Appointments last around 2-3hrs depending on the service you select.
                  I don't rush on my work so please make sure you allocate enough time in your day to get these done!
              </p>
              <p>To get more information about duration please visit the services page!</p>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h4>Q - Where are you located?</h4>
            </div>
            <div class="card-body">
              <p>
                I am located in Birmingham, Alabama. Chelsea, Alabama to be more specific.
                I typically send a studio address out 48 hours before your appointment.
              </p>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h4>Q - How long do lashes typically last?</h4>
            </div>
            <div class="card-body">
              <p>
                Lash extensions typically last 2-3 weeks! All depends on how you take care of them!
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h4>Q - What can I wear to a lash appointment?</h4>
            </div>
            <div class="card-body">
              <p>
                I ask all my clients to come with fresh and clean lashes for a quicker service.
                I recommend coming to your appointment wearing comfortable clothes!
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h4>Q - How do I care for my new lash set?</h4>
            </div>
            <div class="card-body">
              <p>
                I will give you instructions after your session on how to care for your new lashes.
                I also offer lash bath kits!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
`,
})


export class QuestionsComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }


}
