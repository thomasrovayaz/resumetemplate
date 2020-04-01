import React from "react";

let resumeData = {
  imagebaseurl: "https://techonoeticsclub.github.io/",
  name: "Thomas Rovayaz",
  role: "Frontend Developer",
  linkedinId: "Your LinkedIn Id",
  roleDescription:
    "I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time.",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/",
      className: "fa fa-linkedin",
    },
    {
      name: "github",
      url: "http://github.com/",
      className: "fa fa-github",
    },
  ],
  aboutme:
    "I have finished my B.E. in Computer Science and have been working in industry for past few years.",
  address: "Lyon, France",
  website: "https://www.codeclassifiers.com",
  education: [
    {
      UniversityName: "Mumbai University",
      specialization: "Some specialization",
      MonthOfPassing: "Jan",
      YearOfPassing: "2018",
      Achievements: "Some Achievements",
    },
    {
      UniversityName: "Some University",
      specialization: "Some specialization",
      MonthOfPassing: "Jan",
      YearOfPassing: "2018",
      Achievements: "Some Achievements",
    },
  ],
  work: [
    {
      CompanyName: "Some Company",
      specialization: "Some specialization",
      MonthOfLeaving: "Jan",
      YearOfLeaving: "2018",
      Achievements: "Some Achievements",
    },
    {
      CompanyName: "Some Company",
      specialization: "Some specialization",
      MonthOfLeaving: "Jan",
      YearOfLeaving: "2018",
      Achievements: "Some Achievements",
    },
  ],
  skillsDescription: "Your skills here",
  skills: [
    {
      skillname: "HTML5",
    },
    {
      skillname: "CSS",
    },
    {
      skillname: "Reactjs",
    },
  ],
  portfolio: [
    {
      name: "Model Governance Suite",
      description:
        "A suite of software tools to govern the risk of a much higher number of models without increasing the team size.",
      video: (
        <iframe
          width="100%"
          height="250"
          title="Model Governance Suite"
          src="https://www.youtube.com/embed/Of7C3OMylok"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ),
      company: "CloseIT",
      logo: "./images/mgs/logo-1500x423-bila-modra.png",
      url: "https://www.closeit.co/model-governance-suite",
      tags: ["ReactJS", "Design", "UX/UI", "Frontend", "SCRUM", "Jira"],
      backgroundColor: "rgb(13,32,79)",
      months: 24,
    },
    {
      name: "Application de la métropole d'Amiens",
      description:
        "Toutes les infos sur la métropole d'Amiens dans son téléphone!",
      images: [
        {
          url: "./images/amiens/IMG_1250.png",
        },
        {
          url: "./images/amiens/IMG_1260.png",
        },
        {
          url: "./images/amiens/IMG_1258.png",
        },
        {
          url: "./images/amiens/IMG_1259.png",
        },
        {
          url: "./images/amiens/IMG_1251.png",
        },
        {
          url: "./images/amiens/IMG_1256.png",
        },
        {
          url: "./images/amiens/IMG_1252.png",
        },
        {
          url: "./images/amiens/IMG_1257.png",
        },
        {
          url: "./images/amiens/IMG_1253.png",
        },
      ],
      logo: "./images/amiens/logo.png",
      url: "https://www.amiens.fr/Grands-projets/l-appli",
      backgroundColor: "#cb0075",
      tags: ["React Native", "Mobile"],
      quote: {
        author: "Jean-Baptiste Meneroud - CTO",
        text:
          "Thomas a su être à l'écoute et réactif, et ce malgré un grand nombre d'intervenants. Le produit fini est à la hauteur de nos attentes. Je recommande vivement !",
      },
      months: 2,
    },
    {
      name: "i-Micronews",
      description: "Mobile app for daily business, market & technology news",
      images: [
        {
          url: "./images/imicronews/IMG_1269.png",
        },
        {
          url: "./images/imicronews/IMG_1243.png",
        },
        {
          url: "./images/imicronews/IMG_1249.png",
        },
        {
          url: "./images/imicronews/IMG_1245.png",
        },
        {
          url: "./images/imicronews/IMG_1246.png",
        },
        {
          url: "./images/imicronews/IMG_1248.png",
        },
        {
          url: "./images/imicronews/IMG_1247.png",
        },
        {
          url: "./images/imicronews/IMG_1244.png",
        },
      ],
      logo: "./images/imicronews/logo2.jpg",
      backgroundColor: "#5f55c2",
      tags: ["React Native", "Mobile"],
      months: 2,
      url: "https://www.i-micronews.com/i-micronews-app/",
    },
    {
      name: "Veryshop",
      description:
        "VeryShop connecte les consommateurs entre eux dans toutes les grandes surfaces de France, pour rendre les courses efficaces. Finis le stress et la frustration, avec VeryShop restez informé en temps réel de l’actualité de vos magasins.",
      images: [
        {
          url: "./images/veryshop/IMG_1265.png",
        },
        {
          url: "./images/veryshop/IMG_1266.png",
        },
        {
          url: "./images/veryshop/IMG_1267.png",
        },
        {
          url: "./images/veryshop/IMG_1268.png",
        },
        {
          url: "./images/veryshop/IMG_1262.png",
        },
        {
          url: "./images/veryshop/IMG_1263.png",
        },
        {
          url: "./images/veryshop/IMG_1264.png",
        },
      ],
      logo: "./images/veryshop/logo_blue.png",
      backgroundColor: "#aed172",
      tags: ["React Native", "Mobile"],
      months: 2,
      url: "https://veryshop-application.com/",
    },
  ],
  testimonials: [
    {
      description: "This is a sample testimonial",
      name: "Some technical guy",
    },
    {
      description: "This is a sample testimonial",
      name: "Some technical guy",
    },
  ],
};

export default resumeData;
