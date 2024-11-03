import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-resume-testimonial',
    templateUrl: './resume-testimonial.component.html',
    styleUrls: ['./resume-testimonial.component.scss']
})
export class ResumetesTimonialComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    teams = [
        {
            img: "assets/images/resume/testmonial/1.png",
            name: "Richard Wolf",
            designation: "Senior Software Engineering",
            description: "It has been a genuine pleasure to manage Umar throughout his tenure at Wolfe. He is an exceptionally skilled professional with a remarkable talent for fostering a positive and collaborative work environment. Umar consistently demonstrates a high level of engagement and enthusiasm, coupled with a strong commitment to continuous improvement."
        },
        {
            img: "assets/images/resume/testmonial/2.png",
            name: "Daniel Rencewicz",
            designation: "Senior Mobile Developer at Wolfe LLC",
            description: "I had the pleasure of working closely with Umar Bilal for over three and a half years on the GiftYa and Gift Card Granny native apps. His exceptional knowledge of the React Native framework, combined with his skills in app optimization and architecture, were instrumental in our project's success."
        },
        {
            img: "assets/images/resume/testmonial/3.png",
            name: "Max Slipchenko",
            designation: "Senior Quality Assurance Engineer",
            description: "I have had the pleasure of working with Umar Bilal, and I can confidently say that he is an exceptional Senior React Native Developer. His deep expertise in cross-platform mobile app development, particularly with React Native, React.js, Redux, and TypeScript, is truly impressive."
        },
        {
            img: "assets/images/resume/testmonial/4.png",
            name: "David Freidel",
            designation: "Web Developer at WolfeWeb",
            description: "I highly recommend Umar Bilal as an outstanding app developer with whom I've had the pleasure of collaborating for several years, particularly on the GiftYa project. Umar's expertise was instrumental in shaping the success of the app. Umar's dedication to delivering high-quality results consistently exceeded expectations."
        },
        {
            img: "assets/images/resume/testmonial/5.png",
            name: "Ethan Sundstrom",
            designation: "Senior Software Engineer",
            description: "I am pleased to recommend Umar for any role that requires a dedicated and skilled developer. Umar has a clear understanding of project objectives and consistently delivers high-quality work. He excels at organizing projects and meeting tight deadlines, often going above and beyond to ensure the success of the project. "
        },
        {
            img: "assets/images/resume/testmonial/6.png",
            name: "Andrey K.",
            designation: "Full Stack Developer",
            description: "I had the pleasure of working with Umar, where his expertise and strong abilities greatly contributed to our team's success. Umar consistently demonstrated exceptional dedication, proactive problem-solving, and a collaborative spirit, making him a highly valued team member."
        },
        {
            img: "assets/images/resume/testmonial/7.png",
            name: "Devi Kapo",
            designation: "Front-end Developer",
            description: "I had the pleasure of working with Umar at Wolfe, where he consistently impressed me with his exceptional app development skills, positive attitude, and innovative mindset. As an app developer, Umar's technical expertise and dedication ensured the smooth completion of projects and adherence to target dates."
        },
        {
            img: "assets/images/resume/testmonial/8.png",
            name: "Ian Mackenzie",
            designation: "Full Stack Developer",
            description: "I've worked at the same company as Umar now for almost a year and he has been a pleasure to work with. He's got a great attitude, remains very professional and his code has been top notch."
        },
        {
            img: "assets/images/resume/testmonial/9.png",
            name: "Wala Liliana Loubani",
            designation: "Startup life I Ex-Google I Stanford University",
            description: "Umars seniority and experience comes across at easy. He is calm, passionate, has a positive attitude and has an ability to bring solutions and offer suggestions and best practices. This seniority and calmness impacts everyone around him making him the natural lead in any given situation."
        },
        {
            img: "assets/images/resume/testmonial/10.png",
            name: "Nadia Palwasha",
            designation: "Head of Department - Products",
            description: "I rarely come across real talents who stand out like Umar. I worked with Umar at PureLogics. I was impressed by Umar's ability to deal with even the toughest situation /— effortlessly. That skill often takes years to develop among professionals. As a team lead, Umar earns my highest recommendation."
        },
        {
            img: "assets/images/resume/testmonial/11.png",
            name: "Abdul SamadPHP, NodeJS, Angular, NUXT JS, Vue JS, React, Next.JS",
            designation: "Full Stack Developer",
            description: "I interviewed and hired Umar in Whitehats as a Cross-Platform Ionic Software Engineer and he has worked on four different projects with me since then. Umar's ability to handle deadlines really impressed me. "
        },
        {
            img: "assets/images/resume/testmonial/12.png",
            name: "Salah Baig",
            designation: "Head of Engineering at Hazen Technologies",
            description: "Umar is a person you always want to have in your team. He is calm and passionate with a positive attitude. You just need to assign him a task and leave everything on him. He will complete the task with full ownership, within timeline, with every aspect of the task properly implemented and tested."
        },
    ]

    teamcarouselOptions = {
        items: 3,
        margin: 30,
        autoHeight: true,
        nav: true,
        dots: false,
        navText: ['<img src="assets/images/resume/icon/arrow-left.png">', '<img src="assets/images/resume/icon/arrow-right.png">'],
        autoplay: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2,
                margin: 10
            },
            991: {
                items: 3,
                margin: 10
            }
        }
    }



}
