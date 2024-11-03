import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-resume-portfolio',
    templateUrl: './resume-portfolio.component.html',
    styleUrls: ['./resume-portfolio.component.scss']
})
export class ResumePortfolioComponent {
    public work: string = 'Mobile App'; // Default to 'Mobile App'


    nav = [
        {
            img: 'assets/images/resume/icon/installation.png',
            title: 'Mobile App'
        },
        {
            img: 'assets/images/resume/icon/settings.png',
            title: 'Web App'
        }
    ];

    mobileContent = [
        { img: 'assets/images/resume/work/giftya.png', name: 'GIFTYA', link: '/giftya' },
        { img: 'assets/images/resume/work/granny.png', name: 'GRANNY', link: '/granny' },
        { img: 'assets/images/resume/work/clublax.png', name: 'CLUBLAX', link: '/clublax' },
        { img: 'assets/images/resume/work/fert.png', name: 'FERT', link: '/fert' },
        { img: 'assets/images/resume/work/next.png', name: 'NEXT', link: '/next' },
    ];

    webContent = [
        { img: 'assets/images/resume/work/web-1.png', name: 'Giftya Web', link: '/giftyaweb' },
        { img: 'assets/images/resume/work/web-2.png', name: 'Perfect Gift', link: '/perfectgiftweb' },
    ];

    constructor() { }

    openWorkSlide(val: string) {
        this.work = val;
    }

    artistscarouselOptions = {
        items: 5,
        margin: 60,
        nav: true,
        dots: false,
        navText: ['<img src="assets/images/resume/icon/arrow-left.png">', '<img src="assets/images/resume/icon/arrow-right.png">'],
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        responsive: {
            0: {
                items: 1,
                margin: 20
            },
            576: {
                items: 2,
                margin: 30
            },
            768: {
                items: 3,
                margin: 40
            },
            992: {
                items: 4,
                margin: 50
            },
            1200: {
                items: 4,
                margin: 60
            }
        }
    };

}