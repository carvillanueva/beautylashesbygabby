import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main-page',
    styles: [`
        .page-banner {
            color:white;
        }
    `],
    template: `
        <div class="container">

            <!-- banner -->
            <div class="col-xs-12 page-banner" style="color:white">
                <!-- <img src="../assets/images/eyelash-main-cover.png" height="400px;" width="100%"> -->
                <h1>Welcome Baddies</h1>
            </div>
            
            <!-- About me -->
            <div class="row border border-secondary rounded">
                <div class="col-xs-12 col-lg-6">picture</div>
                <div class="col-xs-12 col-lg-6">About me</div>
            </div>

            <!-- testimony -->

            <!-- instagram feed -->
        </div>
    `
})


export class MainPageComponent implements OnInit {

    constructor( ) { }

    ngOnInit() { }


}
