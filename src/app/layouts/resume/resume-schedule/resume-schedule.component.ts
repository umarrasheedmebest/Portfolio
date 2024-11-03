import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-resume-schedule',
    templateUrl: './resume-schedule.component.html',
    styleUrls: ['./resume-schedule.component.scss']
})
export class ResumeScheduleComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    schedule = [
        {
            jobTitle: 'Senior Software Engineer',
            companyName: 'The Wolfe Companies, LLC',
            country: 'United States | Remote',
            img: 'assets/images/resume/exprience/company1.png',
            description1: '○ Optimized and developed mobile application, boosting GiftYa app performance with faster load times and smoother interaction.',
            description2: '○ Implemented various payment methods and social logins, significantly improving user experience and streamlining account access.',
            description3: '○ Architected Gift Card Granny apps, enhancing performance, increasing user engagement, and driving revenue.',
            description4: '○ Trained and mentored developers, promoting continuous improvement and technical excellence.',
            toTime: 'Present',
            endTime: 'Mar 2021'
        },
        {
            jobTitle: 'Senior Software Engineer | TEAM LEAD',
            companyName: 'Tkxel',
            country: 'Lahore, PK',
            img: 'assets/images/resume/exprience/tkxel-logo-blue.svg',
            description1: '○ Led software development by analyzing user needs and system flows to create effective and scalable solutions.',
            description2: '○ Documented solutions through detailed documentation and clear, well structured code to ensure maintainability and ease of understanding',
            description3: '○ Conducted systems analysis to recommend policy changes, enhancing operations.',
            toTime: 'Mar 2021',
            endTime: 'Jan 2020'
        },
        {
            jobTitle: 'Software Engineer',
            companyName: 'Pure Logics',
            country: 'Lahore, PK',
            img: 'assets/images/resume/exprience/company3.jpeg',
            description1: '○ Engaged with clients to understand and analyze their information needs, ensuring tailored solutions and effective communication.',
            description2: '○ Focused on software design, debugging, documentation, and testing to ensure high-quality and reliable software solutions.',
            description3: '○ Developed software solutions by adhering to the software development lifecycle, ensuring structured and efficient project execution.',
            toTime: 'mar 2020',
            endTime: 'Feb 2019'
        },
        {
            jobTitle: 'Software Engineer',
            companyName: 'Whitehats LLC',
            country: 'Lahore, PK',
            img: 'assets/images/resume/exprience/company4.jpeg',
            description1: '○ Specialized in software design, debugging, documentation, and testing, ensuring robust and high-quality solutions.',
            description2: '○ Adhered to software development fundamentals and processes to ensure high-quality, efficient, and reliable software solutions.',
            description3: '○ Developed solutions according to project requirements and architecture, ensuring alignment with design and functionality.',
            description4: '○ Collaborated with cross functional teams to achieve project goals, ensuring alignment, effective communication, and successful outcomes.',
            toTime: 'Dec 2019',
            endTime: 'Aug 2018 '
        },
        {
            jobTitle: 'Software Engineer',
            companyName: 'Cognitive Axis',
            country: 'Lahore, PK',
            description1: '○ Designed, debugged, documented, and tested software solutions to meet specified requirements and ensure quality.',
            description2: '○ Developed scalable solutions and collaborated with teams to ensure seamless integration and optimal functionality.',
            description3: '○Conducted thorough testing and created supporting documentation.',
            toTime: 'Aug 2018',
            endTime: 'Mar 2016 '
        }
    ]
}
