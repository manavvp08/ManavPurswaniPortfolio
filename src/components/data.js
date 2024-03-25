import {
    BubblifyImg,
    PuzzleGameImg,
    BubblesTogetherImg,
    ColorGameImg,
    TodoListImg,
    WebsiteImg,
    DebugDuckImg,
    PongImg,
    FractalTreeImg,
    GameOfLifeImg,
    SpiralOrbitImg,
    DanielProfileImg,
    TankmaniaImg,
} from "../img";

export const profile = DanielProfileImg;

export const projects = [
        
    
    {
        title: "Color Game",
        description: [
            "Guess which color is represented from rgb value",
            "Bootstrap for responsive layout, with smooth fades in CSS",
        ],
        languages: ["Bootstrap", "CSS", "JavaScript"],
        link: "",
        img: ColorGameImg,
        featured: false,
        codeLink: "",
        longDescription: "this is a test",
    },
    {
        title: "To Do List",
        description: [
            "To Do List app with clean interface",
            "Add, delete, mark as done, add new list",
        ],
        languages: ["jQuery", "JavaScript", "Bootstrap", "CSS"],
        link: "",
        img: TodoListImg,
        featured: false,
        codeLink: "",
        longDescription: "this is a test",
    },
    {
        title: "Pong",
        description: [
            "The classic game of pong",
            "Smooth movement and responsive controls",
        ],
        languages: ["Processing"],
        link: "",
        img: PongImg,
        featured: false,
        codeLink: "",
        longDescription: "this is a test",
    },
];

export const info = {
    Name: ["Manav", "Purswani"],
    Location: ["Mumbai, India"],
    Education: ["Thadomal Shahani Engineering College", "2025"],
    Major: "Computer Science",
    Status: "Open to full stack web dev work",
    Email: "manavp080@gmail.com",
    Interests: ["Chess", "Film", "Longboarding"],
};

export const description =
    "I'm a computer science student at " +
    "Thadomal Shahani Engineering College, Mumbai I love designing and coding beautiful, " +
    "functional applications and interfaces that have a real impact on users. Whether " +
    "its writing code, filming videos, or creating art, I'm always making something. Connect with me " +
    "to make something great, together!";

export var nightMode = false;

var tagline = "Software Engineer";
var taglineList = [
    "software engineer",
    "dark mode lover",
    "cs instructor",
    "chess player",
    "web dev intern",
    "longboarder",
    "software engineer intern",
    "filmmaker",
    "graphic designer",
    "proud anteater",
    "proudly made on earth",
    "based on a true story",
    "six seasons and a movie!",
    "click, rinse, repeat!",
    "2, electric boogaloo",
    "this time, its personal",
    "check out my pixels",
    "no refunds",
    "consider scrolling down",
    "s'all good, man",
    "yeah science!",
    "cool. cool cool cool",
    "you really made it this far",
    "I'm proud of you",
    "no, really",
    "good job",
    "keep it up",
    "now please hire me ty",
    "binoy#4941",
    "stop clicking!",
    "expect the unexpected",
    "the darkest timeline",
    ".com was taken",
    "youtu.be/dQw4w9WgXcQ",
    "more coming soon",
    "ok back to the top",
];

var tagIndex = 0;
export const toggleNightMode = () => {
    
    nightMode = !nightMode;
    tagIndex++;
    if (tagIndex >= taglineList.length) {
        tagIndex = 0;
    }
    updateNightMode();
    tagline = taglineList[tagIndex];
};

export const updateNightMode = () =>{
    let root = document.documentElement;
    if (nightMode) {
        root.style.setProperty("--main-bg-color", "#080705");
        root.style.setProperty("--main-text-color", "#e9e9e9");
        root.style.setProperty("--secondary-bg-color", "#111111");
    } else {
        root.style.setProperty("--main-bg-color", "#EFF1F3");
        root.style.setProperty("--main-text-color", "#080705");
        root.style.setProperty("--secondary-bg-color", "#ebebeb");
    }
}

export const getTagline = () => {
    return tagline;
};

export const skills = [{
        title: "Languages",
        items: [
            "Python",
            "C++",
            "Java",
            "Javascript",
            "HTML",
            "CSS",
            "SQL",
            "Processing",
            "C#",
            "p5.js",
            "NodeJS",
        ],
    },
    {
        title: "Frameworks",
        items: [
            "ReactJS",
            "Bootstrap",
            "jQuery",
            "p5.js",
            "GTest",
            "Beautiful Soup",
            "Express.js",
            "SemanticUI",
            "Express.js",
            "Selenium",
        ],
    },
    {
        title: "Tools",
        items: [
            "Git/Github",
            "NPM",
            "Postman",
            "AWS",
            "GCP",
            "Numpy",
            "Heroku",
            "CLIs",
            "MongoDB",
            "VirtualBox",
            "ffmpeg",
            "NLTK",
        ],
    },
    {
        title: "Other",
        items: [
            "Linux/Unix",
            "Figma",
            "Arduino",
            "Photoshop",
            "Premiere Pro",
            "Illustrator",
            "After Effects",
            "3D Printing",
            "Agile",
            "CAD",
            "MS Office",
            "G Suite",
            "Audacity",
        ],
    },
];

export const experience = [
    {
        title: "Feb 2022 - Present",
        cardTitle: "Badger Meter",
        cardSubtitle: "Software Engineer",
        cardDetailedText: [
            "Will be working on data exchange platform and frontend React",
            "Just started here!",
        ]
    },
    {
        title: "Jan 2021 - Sep 2021",
        cardTitle: "Badger Meter",
        cardSubtitle: "Software Engineer Intern",
        cardDetailedText: [
            "Producing clean, efficient code based on user stories and integrated software components",
            "Authoring automated unit, integration, and system tests",
            "Troubleshooting and debugging existing Python and React code base"
        ]
    },
    
];



export const experience_theme = {
    primary: "var(--accent-color-1)",
    secondary: "var(--main-bg-color)",
    cardBgColor: "var(--secondary-bg-color)",
    cardForeColor: "var(--main-text-bg-color)"
}