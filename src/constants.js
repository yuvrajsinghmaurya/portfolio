// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import tvsLogo from './assets/company_logo/tvslogo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import depexLogo from './assets/company_logo/depexlogo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/nit-logo.png';
import vpsLogo from './assets/education_logo/bseb_logo.png';

// Project Section Logo's
import Estate from './assets/work_logo/estate.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      // { name: 'C', logo: cLogo },
      // { name: 'C++', logo: cppLogo },
      // { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
 {
  id: 0,
  img: tvsLogo, // replace with your actual company logo variable
  role: "Backend Developer",
  company: "TVS Solutions (Lucknow)",
  date: "Oct 2024 - Present",
  desc: "Developed and maintained backend APIs using Laravel and Express.js for applications with 3,000+ daily active users. Built a License Key Authentication System reducing unauthorized access by 30%. Integrated Payment Gateway API minimizing transaction failures by 18%, and created real-time admin dashboards improving operational efficiency by 25%.",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "TypeScript",
    "Node JS",
    "Tailwind CSS",
    "MongoDb",
    "Redux",
    "Next Js",
  ],
}
,
   {
  id: 1,
  img: depexLogo, // replace with your actual company logo variable
  role: "Data Science Intern",
  company: "Depex Technologies (P) Ltd (Noida)",
  date: "August 2024 - October 2024",
  desc: "Worked as a Data Science Intern, contributing to the development and analysis of data-driven solutions. Collaborated with the development team under the guidance of Mr. Himesh Singh. Gained hands-on experience in Python, SQL, and data visualization while assisting in building predictive and analytical models. Recognized for sincerity, teamwork, and strong technical performance throughout the internship.",
  skills: [
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Machine Learning",
  ],
}

   
  ];
  
  export const education = [
    // {
    //   id: 0,
    //   img: glaLogo,
    //   school: "GLA University, Mathura",
    //   date: "Sept 2022 - July 2024",
    //   grade: "7.81 CGPA",
    //   desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    //   degree: "Master of Computer Applications - MCA",
    // },
   {
  id: 1,
  img: bsaLogo,
  school: "Nalanda Institute of Technology, Bhubaneswar",
  date: "2020 - 2024",
  grade: "7.5 / 10",
  desc: "I completed my Bachelor's degree in Technology (B. Tech) in Mechanical Engineering from Nalanda Institute of Technology, Bhubaneswar. My studies provided a strong foundation in mechanical principles, design, and manufacturing processes. I engaged in projects that applied theoretical concepts to practical engineering challenges, enhancing my problem-solving and technical skills.",
  degree: "Bachelor of Technology - B. Tech (Mechanical Engineering)",
},
   {
  id: 2,
  img: vpsLogo,
  school: "Maya Chhota Inter College, Gopalganj, Bihar",
  date: "2018 - 2020",
  grade: "66%",
  desc: "I completed my class 12 education from Maya Chhota Inter College, Gopalganj, under the Bihar board, where I studied Physics, Chemistry, and Mathematics (PCM).",
  degree: "Intermediate (+2) PCM",
},
   {
  id: 3,
  img: vpsLogo,
  school: "Mukhi Ram High School Inter College, Gopalganj, Bihar",
  date: "2018 - 2020",
  grade: "66%",
  desc: "I completed my class 10 education from Mukhi Ram High School Inter College, Gopalganj, under the Bihar board, where I studied Science with Mathematics.",
  degree: "Matriculation (X), Science with Mathematics",
},
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Estate project",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed Estate Building information. Simply slide and show all house, and directly mail to the Owner.",
      image: Estate,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API" , "Tailwind"],
      github: "https://github.com/yuvrajsinghmaurya/Estate",
      webapp: "https://yuvrajsinghmaurya.github.io/Estate/",
    },
    {
      id: 1,
      title: "CS Prep",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "#",
      webapp: "#",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "#",
      webapp: "#",
    },


    
  ];  