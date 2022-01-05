import { Box } from "@mui/material";
import React from "react";
import CardProject from "../card/CardProject";
import "./style.scss";

interface cardMediaProps {
  description: string;
  image: string;
  title: string;
  techs: string[];
  link: string;
  sourceCode: string;
  drawback: string;
  functions: string;
}

const cardMedia: cardMediaProps[] = [
  {
    image:
      "https://www.nme.com/wp-content/uploads/2021/06/redvelvet-psycho-2019.jpg",
    title: "Jogue (Music app)",
    techs: [
      "https://img.icons8.com/color/48/000000/javascript--v1.png",
      "https://img.icons8.com/color/48/000000/sass.png",
      "https://img.icons8.com/color/50/000000/bootstrap.png",
    ],
    link: "https://banban911.github.io/Jogue/",
    description:
      "Inspired by tutorial of Mr.Son Dang, founder of F8, this simple mobile-designed product provides user with basic functions of a music app named as play, back or forward song in playlist.",
    sourceCode: "https://github.com/banban911/Jogue",
    drawback: "Music source taken from no API, just hard-code",
    functions: "",
  },
  {
    image:
      "https://archive.esportsobserver.com/wp-content/uploads/2020/10/Riot-Games-Four-Esports-One-Year-2020.jpg",
    title: "Briot (Cloned Riot's page)",
    link: "https://banban911.github.io/Briot/",
    description:
      "First React-based app intergrated by riot APIs, I build up a new website in the base of Riot homepage, LOL universe page and LOL Vietnam homepage",
    sourceCode: "https://github.com/banban911/Briot",
    techs: [
      "https://img.icons8.com/color/48/000000/react-native.png",
      "https://img.icons8.com/color/48/000000/javascript--v1.png",
      "https://img.icons8.com/color/48/000000/python.png",
      "https://img.icons8.com/color/48/000000/sass.png",
      "https://img.icons8.com/color/50/000000/bootstrap.png",
    ],
    drawback:
      "Fetching data includes multiple images take for a while, initial loading is quite slow.",
    functions: "",
  },
  {
    image:
      "https://media-exp1.licdn.com/dms/image/C511BAQHzmaGH1-wcsQ/company-background_10000/0/1563093073691?e=2159024400&v=beta&t=JzN1HhvT2W7gNyLIB4UE12J5REVCNj3qgQC-1qHr9B4",
    title: "Beta (Cloned fb's homepage)",
    link: "https://bimory.netlify.app/",
    description:
      "It tooks about a month and a half to complete this clone facebook app. I learn from scratch the noSQL database, CURL API beside connection between front-end and back-end (the very basic ones) and more.",
    sourceCode: "https://github.com/banban911/Bindr",
    techs: [
      "https://img.icons8.com/color/48/000000/react-native.png",
      "https://img.icons8.com/color/48/000000/javascript--v1.png",
      "https://img.icons8.com/color/48/000000/sass.png",
      "https://img.icons8.com/color/50/000000/bootstrap.png",
    ],
    drawback:
      "Connection to the database is not speedy, even broken sometime. Update posts API works improperly, the former image preview remains in the latter open.",
    functions: "",
  },
  {
    image:
      "https://assets.getpostman.com/covid-19/postman-covid-19-social-image.jpg",
    title: "Diagon (Covid tracking)",
    link: "https://banban911.github.io/diagon/",
    description:
      "I built this app in the first day of the Covid year the third, using Covid API from postman and charts to visualize the data through.",
    sourceCode: "https://github.com/banban911/Briot",
    techs: [
      "https://img.icons8.com/color/48/000000/react-native.png",
      "https://img.icons8.com/color/48/000000/javascript--v1.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    ],
    drawback:
      "Unparallel between the calendar duration and the obsevered durations, as when the latter changes the former stands still.",
    functions: "",
  },
];

const Projects = () => {
  return (
    <div className='cardsProject'>
      {cardMedia.map((media, index) => (
        <Box>
          <CardProject
            key={index}
            image={media.image}
            title={media.title}
            techs={media.techs}
            link={media.link}
            description={media.description}
            sourceCode={media.sourceCode}
            drawback={media.drawback}
            functions={media.functions}
          />
        </Box>
      ))}
    </div>
  );
};

export default Projects;
