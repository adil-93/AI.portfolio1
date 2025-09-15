// Project Constants
const TYPING_SPEED = 100; // milliseconds per character
const TYPING_DELAY = 1000; // delay before starting typing
const LOADER_DURATION = 2000; // loader display duration

// Typing text options
const TYPING_TEXTS = [
    "Java Full Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "Problem Solver"
];

// Animation durations
const FADE_DURATION = 300;
const SCROLL_OFFSET = 100;

// Projects Data
const PROJECTS_DATA = [
    {
        id: 1,
        title: " Portfolio",
        description: "portfolio which is used to describe my achievements and showcase my skills and projects in an interactive way. Built with modern web technologies and responsive design.",
        image: "images/portfolio.jpg",
        technologies: ["HTML", "CSS", "JavaScript"],
        links: {
            live: "#",
            github: "#"
        },
        featured: true
    },
    // You can add more projects here in the future
    {
        id: 2,
        title: "Coming Soon",
        description: "More exciting projects are on the way! Stay tuned for updates on my latest work and innovations.",
        image: "images/coming-soon.jpg",
        technologies: ["Java", "Spring Boot", "MySQL"],
        links: {
            live: "#",
            github: "#"
        },
        featured: false
    }
];

// Experience Data
const EXPERIENCE_DATA = [
    {
        id: 1,
        type: "education", // or "work"
        title: "Java Full Stack Developer Trainee",
        company: "TAP Academy",
        location: "India",
        duration: "6 Months",
        startDate: "2024",
        endDate: "Present",
        description: "Currently undergoing comprehensive training in Java full stack development for 6 months, learning both frontend and backend technologies.",
        skills: ["Java", "JDBC", "MySQL", "Frontend Technologies","HTML","CSS","JavaScript"],
        achievements: [
            "Learning core Java programming concepts",
            "Database management with MySQL",
            "Frontend development with HTML, CSS, JavaScript",
            "Building full-stack applications"
        ]
    }
];

// Skills Data
const SKILLS_DATA = {
    "Backend Development": [
        {
            name: "Java",
            icon: "fab fa-java",
            level: 75
        },
        {
            name: "JDBC",
            icon: "fas fa-database",
            level: 70
        }
    ],
    "Database": [
        {
            name: "MySQL",
            icon: "fas fa-database",
            level: 70
        }
    ],
    "Frontend Technologies": [
        {
            name: "HTML5",
            icon: "fab fa-html5",
            level: 80
        },
        {
            name: "CSS3",
            icon: "fab fa-css3-alt",
            level: 75
        },
        {
            name: "JavaScript",
            icon: "fab fa-js-square",
            level: 70
        }
    ],
    "Tools & Others": [
        {
            name: "Git",
            icon: "fab fa-git-alt",
            level: 65
        },
        {
            name: "VS Code",
            icon: "fas fa-code",
            level: 80
        }
    ]
};

// Contact Information
const CONTACT_INFO = {
    personal: {
        name: "Shaik Adil",
        title: "Java Full Stack Developer",
        email: "shaikadil096@gmail.com",
        phone: "+91 9392695312",
        location: "India",
        availability: "Available for opportunities"
    },
    social: [
        {
            name: "LinkedIn",
            icon: "fab fa-linkedin",
            url: "https://www.linkedin.com/in/shaik-adil-4116b3291/",
            color: "#0077b5"
        },
        {
            name: "GitHub",
            icon: "fab fa-github",
            url: "https://github.com/adil-93",
            color: "#333"
        },
        {
            name: "Twitter",
            icon: "fab fa-twitter",
            url: "#",
            color: "#1da1f2"
        },
        {
            name: "Instagram",
            icon: "fab fa-instagram",
            url: " https://www.instagram.com/adil__shaik__321?igsh",
            color: "#e4405f"
        }
    ],
    resume: {
        url: "https://drive.google.com/file/d/1yTkLrLRF7jFbOLR5eXZ86xI9ntXo9Ldg/view?usp=drivesdk",
        filename: "Shaik_Adil_Resume.pdf"
    }
};

// Personal Information
const PERSONAL_INFO = {
    name: "Shaik Adil",
    title: "Java Full Stack Developer",
    subtitle: "Trainee at TAP Academy",
    description: "My name is Shaik Adil I am Java full stack developer",
    profileImage: "images/profile.jpg",
    intro: "Hi, I'm",
    tagline: "Passionate about creating innovative solutions and learning new technologies."
};


