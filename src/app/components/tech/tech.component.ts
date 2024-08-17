import { Component } from "@angular/core";

@Component({
  selector: "app-tech",
  standalone: true,
  imports: [],
  templateUrl: "./tech.component.html",
  styleUrl: "./tech.component.css",
})
export class TechComponent {
  languageIcons = [
    {
      name: "Java",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/ProgrammingLanguages/java.svg",
    },
    {
      name: "Python",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/ProgrammingLanguages/python.svg",
    },
    // {
    //   name: "C",
    //   url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/ProgrammingLanguages/c.svg",
    // },
    {
      name: "CPP",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/ProgrammingLanguages/cpp.svg",
    },
    {
      name: "JavaScript",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/ProgrammingLanguages/javascript.svg",
    },

    {
      name: "TypeScript",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/ProgrammingLanguages/typescript.svg",
    },
    {
      name: "NodeJs",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/BackendDevelopment/nodejs.svg",
    },

    // {
    //   name: "HTML",
    //   url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/FrontendDevelopment/html.svg",
    // },

    // {
    //   name: "CSS",
    //   url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/FrontendDevelopment/css.svg",
    // },
  ];
  // webDevLibs = [

  // ]
  databaseIcons = [
    {
      name: "MongoDB",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Database/mongodb.svg",
    },
    {
      name: "PostgreSQL",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Database/postgresql.svg",
    },

    {
      name: "Reddis",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Database/redis.svg",
    },
  ];

  frameWork = [
    {
      name: "Express",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/BackendDevelopment/express.svg",
    },
    {
      name: "React",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/FrontendDevelopment/reactjs.svg",
    },
    {
      name: "NextjJs",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/StaticSiteGenerators/nextjs.svg",
    },

    {
      name: "Redux",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/FrontendDevelopment/redux.svg",
    },
    {
      name: "Tailwind",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/FrontendDevelopment/tailwind.svg",
    },
    {
      name: "Angular",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/FrontendDevelopment/angularjs.svg",
    },
  ];

  cloudIcons = [
    {
      name: "AWS",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Devops/aws.svg",
    },
    {
      name: "Firebase",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/BaaS/firebase.svg",
    },
    {
      name: "Cloudflare",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtzryUYsaPs8-kUbeOL_oaFBO3xkHzg_4yVg&s",
    },
  ];
  additionalToolIcons = [
    {
      name: "Git",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Other/git.svg",
    },
    {
      name: "Linux",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Other/linux.svg",
    },
    {
      name: "Bash",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Devops/bash.svg",
    },
    {
      name: "Postman",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Software/postman.svg",
    },
  ];
  devOpToolsIcons = [
    {
      name: "Nginx",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/BackendDevelopment/nginx.svg",
    },

    {
      name: "K8s",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Devops/kubernetes.svg",
    },
    {
      name: "Docker",
      url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Devops/docker.svg",
    },

    // {
    //   name: "Discord",
    //   url: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg",
    // },
  ];
}
