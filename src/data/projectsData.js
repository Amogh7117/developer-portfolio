// Use SVGs from the public folder to prevent Babel/SVGR from transforming them
const four = "/assets/projects/four.svg";
const eight = "/assets/projects/eight.svg";

export const projectsData = [
    {
        id: 1,
        projectName: 'COVID-19 Bed Slot Booking System',
        projectDesc: 'This project focuses on creating a COVID-19 bed slot booking system that allows users to view real-time hospital bed availability and securely book a bed during medical emergencies.',
        tags: ['HTML', 'CSS', 'JavaScript', 'SQL'],
        demo: '',
        image: eight,
    },
    {
        id: 2,
        projectName: 'Aadisys Software Solutions',
        projectDesc: 'Built a responsive webpage for Aadisys Software Solutions with WhatsApp OTP verification for secure user access.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Php'],
        demo: 'https://aadis.space/',
        image: four,
    },
];
