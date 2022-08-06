import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main-page',
    styles: [`
        .hero-banner {
            background-image: url('https://images.unsplash.com/photo-1589307004173-3c95204d00ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 800px;
            position: relative;
            top: -350px;
        }
        .top-carousel {
            height: 350px;
            max-width: 1100px;
        }
        .baddie-reviews {
            font-size: 65px;
            color: hotpink;
            font-family: 'Allura', cursive;
            z-index:10;
            position: absolute;
            left: 50%;
            top:0px;
            font-style: italic;
            transform: translateX(-50%);
        }
        .info-hello {
            font-family: 'Allura', cursive;
            font-size: 100px;
            color: lightpink;
            position: absolute;
            top: 0px;
            transform: translateX(-50%);

        }
        @media screen and (max-width: 500px) {
            .baddie-reviews{
                font-size: 45px;
                width: 100%;
                text-align: center;
                margin-top: 15px;
            }
            .info-hello {
                font-size: 65px;
                width: 100%;
                top: -15px;
                right: -200px;
            }
        }
        @media screen and (max-width: 950px) {
            .info-hello {
                font-size: 75px;
                width: 100%;
                top: -30px;
            }
            .baddie-reviews{
                font-size: 55px;
                width: 100%;
                text-align: center;
            }

        }

    `],
    template: `
        <!-- banner -->
        <div class="hero-banner">
            <div class="container hero-text fs-1 ">
               <h2 class="my-3">welcome to beautylashesbygabby</h2>
               <p class="my-3"></p>
               <button class="book-btn btn btn-md btn-outline-light my-3" [routerLink]="['/book']">BOOK YOUR APPOINTMENT HERE!!</button>
            </div>
        </div>

        <div class="after-banner-fix">
            <!-- About me -->
            <div class="col-xs-12 container row p-4 mx-auto mb-5 align-items-center shadow-lg" style="border-radius: 8px; z-index: 2; position: relative">
                <div class="col-lg-7 p-3 p-lg-5 pt-lg-3 text-center">
                    <span class="info-hello opacity-50">hey baddies!!</span>
                    <h3 class="fw-semibold" style="background-color:white;">WELCOME 🤍🤍🤍</h3>
                    <p class="lead">
                        Hey girly!! My name is Gabby! I am veryexcited to become your lash tech! Thank you for choosing and trusting me!
                        I am home based located in Chelsea, AL, so I ask for all my baddies to come with pure and good intentions.
                        We are all baddies who deserve to get treated with bomb lashes. Can't wait to see you soon!
                        Make sure to check out my services and policies page before booking!!
                    </p>
                </div>
                <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img class="rounded shadow" src="../../assets/images/profile-pic.jpg" style="border: solid 2px hotpink" width="100%">
                </div>
            </div>

            <!-- testimony -->
            <div class="py-5 bckground-pink">
                <div class="">
                    <span class="baddie-reviews">reviews from baddies</span>
                </div>
                <div class="container top-carousel mx-auto">
                    <div id="carouselExampleDark" class="carousel rounded carousel-dark slide bg-light" style="height:100%" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner text-dark" style="height:100%;">
                            <div class="carousel-item active" style="height:100%; top:-75px;">
                                <div class="carousel-caption">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item" style="height:100%; top:-75px;">
                                <div class="carousel-caption" >
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item" style="height:100%; top:-75px;">
                                <div class="carousel-caption">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="container mx-auto my-5" style="max-width:750px;">
                <div class="row p-4 align-items-center mx-3 rounded-3 border shadow-lg">
                <div class="col-xs-12 p-3 text-center">
                    <h1 class="display-4 fw-bold" id="contact">Contact me!!</h1>
                    <p class="lead">Feel free to contact me with any questions you may have!</p>
                </div>
                <iframe allowTransparency="true" style="min-height:500px; height:1100px" width="100%"  id="contactform123" name="contactform123" marginwidth="0" marginheight="0" frameborder="0" src="https://form.123formbuilder.com/my-contact-form-6220104.html">
                <p>Your browser does not support iframes. The contact form cannot be displayed. Please use another contact method (phone, fax etc)</p></iframe>
            </div>

        </div>
        <!-- instagram feed -->
        <div class="embedsocial-hashtag" data-ref="ac3c059b32d81f418b68cbe811d18ecc1fef462d"></div>
    `
})


export class MainPageComponent implements OnInit {

    constructor( ) { }

    ngOnInit() { }


}
