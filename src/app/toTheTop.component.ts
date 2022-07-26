import { Component } from '@angular/core';

@Component({
  selector: 'toTheTop',
  template: `
  <div>
    <button (click)="onButtonPress()" [ngClass]="scrollClass">&#x25B2;</button>
  </div>
  `,
  styles:[`
    .go-to-top {
      -webkit-border-radius: 8;
      -moz-border-radius: 8;
      border-radius: 8px;
      font-family: Courier New;
      color: #fff;
      font-size: 12px;
      padding-top: 5px;
      padding-right: 10px;
      padding-left: 10px;
      padding-bottom: 4px;
      background: hotpink;
      text-decoration: none;
      position: fixed;
      bottom:15px;
      left:auto;
      right:15px;
      cursor: pointer;
      border: none;
    }
    .go-to-top:hover {
      background: lightpink;
      text-decoration: none;
    }
    .hide-scroll {
      display: none;
    }
    `],
    host: {
      '(window:scroll)': 'checkScrollUp()'
    }
})
export class ToTheTopComponent {

  something = true;
  scrollClass = 'go-to-top';

  ngOnInit() {
    this.checkScrollUp();
  }
  onButtonPress() {
    var startingPlace = this.currentYPosition();
    var stoppingPlace = 0;
    // Calculate distance based on y-coordinates
    var distance = stoppingPlace > startingPlace ? stoppingPlace - startingPlace : startingPlace - stoppingPlace;
		var speed = Math.round(distance / 100);
    // Never go slower than 10 speed
		if (speed >= 10) speed = 10;

    // Log some basic information for testing purposes
    // console.log("Start: " + startingPlace + ", Stop: " + stoppingPlace + ", Distance: " + distance + ", Speed: " + speed);

		var move = Math.round(distance / 100);
		var leapY = stoppingPlace > startingPlace ? startingPlace + move : startingPlace - move;
		var timer = 0;
		if (stoppingPlace > startingPlace) {
			for (var i = startingPlace; i < stoppingPlace; i += move) {
				this.scrollTo(leapY, timer * speed);
				leapY += move; if (leapY > stoppingPlace) leapY = stoppingPlace; timer++;
			} return;
		}
		for (var i = startingPlace; i > stoppingPlace; i -= move) {
			this.scrollTo(leapY, timer * speed);
			leapY -= move; if (leapY < stoppingPlace) leapY = stoppingPlace; timer++;
		}
  }
  // Function that returns current Y position in browser window
  currentYPosition() {
    if (self.pageYOffset) return self.pageYOffset; // Firefox, Chrome, Opera, Safari
    if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop; // Internet Explorer 6 - standards mode
    if (document.body.scrollTop) return document.body.scrollTop; // Internet Explorer 6, 7 and 8
    return 0;
  }
  // Function to loop scrollTo with setTimeout function to simulate scrolling speed animation
  scrollTo(yPoint: number, duration: number) {
    setTimeout(() => {
        scrollTo(0, yPoint)
    }, duration);
    return;
  }
  // Function to check how far from the top the user is to determine whether to show/hide scroll up button
  checkScrollUp() {
    var dist = this.currentYPosition();

    if (dist > 400) {
      this.scrollClass = 'go-to-top';
    }
    else {
      this.scrollClass = 'hide-scroll';
    }
  }
}
