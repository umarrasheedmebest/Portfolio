import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-resume-services',
    templateUrl: './resume-services.component.html',
    styleUrls: ['./resume-services.component.scss']
})
export class ResumeServicesComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    service = [
        {
            img: "assets/images/resume/service-exprience/1.png",
            type: 'Mobile Application',
            desc: 'Creating intuitive, high-performance mobile applications that deliver a seamless user experience across multiple platforms.'
        },
        {
            img: "assets/images/resume/service-exprience/3.png",
            type: 'Web Development',
            desc: 'Delivering a seamless user experience across all platforms by creating intuitive, high-performance web applications.'
        },
        {
            img: "assets/images/resume/service-exprience/4.png",
            type: 'Web Design',
            desc: 'Creating visually engaging and user-friendly web designs that prioritize responsive layouts, intuitive navigation, and a seamless user experience across all devices and platforms.'
        },
    ]


}
