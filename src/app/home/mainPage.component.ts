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
            top: -300px;
        }

        .top-carousel {
            height: 350px;
            max-width: 900px;
        }

    `],
    template: `
        <!-- banner -->
        <div class="hero-banner">
            <div class="container hero-text fs-1 ">
               <h2 class="my-3">ABCDEFGHIJKLM</h2>
               <p class="my-3"></p>
               <button class="book-btn btn btn-md btn-outline-secondary">BOOK YOUR APPOINTMENT</button>
            </div>
        </div>

        <div class="after-banner-fix">
            <!-- About me -->
            <div class="col-xs-12 container row p-4 mx-auto mb-5 align-items-center shadow-lg" style="border-radius: 8px; z-index: 2">
                <div class="col-lg-7 p-3 p-lg-5 pt-lg-3 text-center">
                    <h1 class="display-4 fw-bold lh-1">little bit about me...</h1>
                    <p class="lead">HII!! My name is Gabby (@gabbyvill). I am a certified lash technician from (whatever institution). I have been lashing beautitful baddies like yourself for over a year now. I have loved seeing the transformation and the confidence lashes gives people. </p>
                </div>
                <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img class="rounded shadow" src="../../assets/images/profile-pic.jpg" style="border: solid 2px hotpink" width="100%">
                </div>
            </div>

            <!-- testimony -->
            <div class="py-5 bckground-pink">
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

            <div class="container mx-auto my-5" style="max-width:650px;">
                <div class="row p-4 align-items-center mx-3  rounded-3 border shadow-lg">
                <div class="col-xs-12 p-3 text-center">
                    <h1 class="display-4 fw-bold" id="contact">Contact me!!</h1>
                    <p class="lead">Feel free to contact me with any questions you may have!</p>
                </div>
                <!-- form - elfsight -->
                <div class="elfsight-app-5b4c3435-a56c-41da-842c-3a10ae8e6a61"></div>
            </div>

            <!-- instagram feed -->
            <div class="">
                <!-- <div class="elfsight-app-36ef57ad-df3f-496e-81a8-a2ac2779e57f"></div> -->
            </div>
        </div>
    `
})


export class MainPageComponent implements OnInit {

    constructor( ) { }

    ngOnInit() { }


}
