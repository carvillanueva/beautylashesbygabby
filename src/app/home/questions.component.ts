

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
    top: -300px;
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
  }
  .separator {
    background-color: #ccc;
    border: 1px solid #ccc;
    display: block;
    height: 5px;
    margin: 0 auto;
    position: relative;
    width: 60px;
  }
  .separator::after {
    background: #666;
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
  .card-header h4 {
    margin: 0;
    padding: 25px 45px 25px 25px;
    cursor: pointer;
    position: relative;
    font-size: 20px;
  }
  .card-header h4.collapsed::after {
    width: 20px;
    height: 22px;
    position: absolute;
    top: 50%;
    right: 24px;
    content: '\f055';
    font-family: FontAwesome;
    font-size: 22px;
    line-height: 22px;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .card-header h4::after {
    width: 20px;
    height: 22px;
    position: absolute;
    top: 50%;
    right: 24px;
    content: '\f056';
    font-family: FontAwesome;
    font-size: 22px;
    line-height: 22px;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .card-body {
    padding: 0 25px 25px;
  }
  .card-body p:last-child {
    margin: 0;
  }
`,
],
template: `
  <!-- banner -->
  <div class="hero-banner">
    <div class="container hero-text ">
      <h2 class="my-3">FAQs</h2>
      <p class="my-3"></p>
      <button class="btn btn-md btn-outline-secondary">BOOK YOUR APPOINTMENT</button>
    </div>
  </div>
  <div class="container mb-5 after-banner-fix">
    <div class="section-title">
      <h2>Frequently Asked Questions</h2>
      <div class="separator"></div>
    </div>
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="accordion" id="faqs-content">
          <div class="card">
            <div class="card-header">
              <h4 data-toggle="collapse" data-target="#item1"> How long do these appointments last?</h4>
            </div>
            <div id="item1" class="collapse show" data-parent="#faqs-content">
              <div class="card-body">
                <p> L</p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h4 class="collapsed" data-toggle="collapse" data-target="#item2">Where does it come from?</h4>
            </div>
            <div id="item2" class="collapse show" data-parent="#faqs-content">
              <div class="card-body">
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply
                  random text. It has roots in a piece of classical Latin
                  literature from 45 BC, making it over 2000 years old.
                </p>
                <p>
                  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                  Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC.
                </p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h4 class="collapsed" data-toggle="collapse" data-target="#item3">Why do we use it?</h4>
            </div>
            <div id="item3" class="collapse show" data-parent="#faqs-content">
              <div class="card-body">
                <p>
                  It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking
                  at its layout.
                </p>
                <p>
                  The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using 'Content here, content here', making it look like
                  readable English.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h4 class="collapsed" data-toggle="collapse" data-target="#item4">Where can I get some?</h4>
            </div>
            <div id="item4" class="collapse show" data-parent="#faqs-content">
              <div class="card-body">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in
                  some form, by injected humour, or randomised words which
                  don't look even slightly believable.
                </p>
                <p>
                  If you are going to use a passage of Lorem Ipsum, you need
                  to be sure there isn't anything embarrassing hidden in the
                  middle of text.
                </p>
              </div>
            </div>
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
