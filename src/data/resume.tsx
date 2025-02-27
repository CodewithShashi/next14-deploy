import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shashi Shekhar Pandey",
  initials: "DV",
  url: "",
  location: "Noida, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I'm software developer from India with expertise in UI development Javascript, React, CMS and UI/UX technologies for user interface development. staying ahead of technological trends by constantly investigating new tools.",
  summary:
    "Frontend developer, crafting responsive, user-centric websites. With years of experience, I deliver high-performance, cross-browser compatible solutions. Passionate about enhancing user experiences through innovative design and performance optimization, while staying updated with modern web trends.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "WordPress",
    "Shopify",
    "Bootstrap",
    "Node.js",
    "JavaScript",
    "MongoDB",
    "Figma",
    "HTML5",
    "CSS3",
    "Gohighlevel",
    "UI/UX",
    "UI Development",
    "Netlify",
    "Github",
    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://www.behance.net/pandeyshashi", icon: NotebookIcon, label: "Design" },
  ],
  contact: {
    email: "shashishekharp41@gmail.com",
    tel: "+919708193703",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/CodewithShashi",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shashishekharpandey/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/MeShashiShekhar",
        icon: Icons.x,

        navbar: true,
      },
      
      email: {
        name: "Send Email",
        url: "shashishekharp41@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "GlobalLogic - A Hitachi Group Company",
      href: "https://globallogic.com/",
      badges: [],
      location: "Remote",
      title: "Associate Software Engineer",
      logoUrl: "/GLlogo.jpg",
      start: "June 2024",
      end: "Present",
      description:
        "GlobalLogic is a dynamic organization where I contribute as a full-cycle developer on various projects, leveraging my expertise in front-end technologies to create engaging and user-friendly designs that enhance project functionality and user experience.",
    },
    {
      company: "Dream Reflection Media Pvt Ltd.",
      badges: [],
      href: "https://dreamreflectionmedia.com/",
      location: "Noida, India",
      title: "UI Developer",
      logoUrl: "/DRM.png",
      start: "May 2023",
      end: "April 2024",
      description:
        "Dream Reflection Media organization where I work as a UI Developer, contributing my expertise to various projects. I design and develop frontend interfaces using modern technologies on CMS platforms, ensuring seamless user experiences and visually appealing designs.",
    },
    {
      company: "Larsen & Toubro Infotech Ltd.",
      href: "https://www.ltimindtree.com/",
      badges: [],
      location: "Mumbai, India",
      title: "Software Engineer Intern",
      logoUrl: "/LTIMindtree.png",
      start: "February 2022",
      end: "June 2022",
      description:
        "As a Software Engineer Intern, I contributed to the Bank of India project, designing and developing frontend interfaces using CMS platforms and Liferay. Leveraging frontend technologies, I created intuitive, user-friendly designs to enhance the project's UI/UX experience.",
    },
    
  ],

  education: [
    
    {
      school: "Kurukshetra University",
      href: "https://kuk.ac.in/",
      degree: "Bachelor's of Technology in Computer Science (B.Tech)",
      logoUrl: "/Kuk.jpg",
      start: "2019",
      end: "2023",
    },
    
    {
      school: "NIOS",
      degree: "Higher Education",
      logoUrl: "/Nios.jpg",
      start: "2017",
      end: "2019",
    },

    {
      school: "Harihar Singh Academy",
      href: "https://www.hsacademyvns.edu.in/",
      degree: "Secondary Education",
      logoUrl: "/HSA.jpg",
      start: "2016",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "Hitachi Digital Services",
      href: "https://hitachids.com/careers/",
      dates: "June 2024 - Janaury2025",
      active: false,
      description:
        "Designed and developed the front-end for Hitachi Digital Services, ensuring a modern, responsive, and user-friendly interface. Focused on UX/UI principles, seamless navigation, and interactive elements for an engaging experience.",
      technologies: [
        "Html",
        "Css",
        "Figma",
        "Wordpress",
        "Bootstrap",
        "Javascript",
        "FTP",
        "UI/UX",

      ],
      links: [
        {
          type: "Website",
          href: "https://hitachids.com/careers/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/HDS.png",
      video:"",
    },
    {
      title: "Vaamveda Healthcare",
      href: "https://vaamveda.com/",
      dates: " June2023 - August2023",
      active: false,
      description:
        "Vaamveda Healthcare is a full-stack SaaS platform built for Shopify, handling everything from frontend UI/UX to backend functionalities, streamlining e-commerce operations with seamless integration and enhanced user experience.",
      technologies: [
        "Shopify",
        "Javascript",
        "Bootstrap",
        "TailwindCSS",
        "Html",
        "Figma",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://vaamveda.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Vaamveda.png",
      video:"",
    },
    {
      title: "Bank of India ",
      href: "https://bankofindia.co.in/",
      dates: "February 2022 - June2022",
      active: false,
      description:
        "Developed the front-end for **Bank of India Corporate**, a SaaS platform using **WordPress** and **Liferay**. Focused on intuitive UI/UX, responsive design, and seamless user experience for corporate banking services.",
      technologies: [
        "Wordpress",
        "JqueryUI",
        "Bootstrap",
        "Javascript",
        "LifeRay",
        "Html",
        "Figma",

      ],
      links: [
        {
          type: "Website",
          href: "https://bankofindia.co.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/BOI.png",
      video: "",
    },
    
    {
      title: "the Fampreneur",
      href: "https://thefampreneur.com/",
      dates: "July2023 - September2023",
      active: true,
      description:
        "**The Fampreneurs** – A front-end SaaS platform built on Shopify, designed to empower family entrepreneurs with seamless e-commerce solutions. Features intuitive UI, custom storefronts, and optimized performance for business growth.",
      technologies: [
        "Shopify",
        "Javascript",
        "Bootstrap",
        "TailwindCSS",
        "Html",
        "Css",
        "Figma",
        "Liquid",
      ],
      links: [
        {
          type: "Website",
          href: "https://thefampreneur.com/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/Fam.png",
      video: "",
    },
    
  ],
  hackathons: [
    {
      title: "Student Representative E-Cell, IIT Bombay ",
      dates: "Feb 15th - 17th, 2021",
      location: "Mumbai, India",
      description:
        "Developed a web application which delivered bedtime stories to children using augmented reality.",
      image:"/ecell_iitb_logo.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Geeta Technical Hub",
      dates: "May 14th - December 12th, 2023",
      location: "Panipat, India",
      description:
        "Design a UI/UX Graphics which delivers university campus wide events in real time to all students.",
      image:
        "/GTH.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    
      
    
  ],
} as const;
