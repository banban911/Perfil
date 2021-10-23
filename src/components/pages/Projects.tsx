import React from "react";
import CardProject from "../card/CardProject";
import { Box } from "@mui/material";
import "./style.scss";

// <img src='https://img.icons8.com/color/48/000000/react-native.png' />
// <img src='https://img.icons8.com/color/48/000000/nodejs.png' />
// <img src='https://img.icons8.com/color/48/000000/typescript.png' />
// <img src='https://img.icons8.com/color/48/000000/javascript--v1.png' />
// <img src='https://img.icons8.com/color/48/000000/sass.png' />
// <img src='https://img.icons8.com/plasticine/100/000000/api.png' />
const icons8_baseUrl = "https://img.icons8.com/color/";

interface cardMediaProps {
  description: string;
  image: string;
  title: string;
  techs: string[];
  link: string;
  sourceCode: string;
  drawback: string;
}

const cardMedia: cardMediaProps[] = [
  {
    image:
      "https://www.nme.com/wp-content/uploads/2021/06/redvelvet-psycho-2019.jpg",
    title: "Music app",
    techs: [
      "https://img.icons8.com/color/48/000000/javascript--v1.png",
      "https://img.icons8.com/color/48/000000/sass.png",
      "https://img.icons8.com/color/50/000000/bootstrap.png",
    ],
    link: "https://banban911.github.io/Jogue/",
    description:
      "Inspired by tutorial of Son Dang, founder of F8, this simple mobile-designed product provides user with basic functions of a music app named as play, back or forward song in playlist.",
    sourceCode: "https://github.com/banban911/Jogue",
    drawback: "The music source is somehow hard-code, so it has only ten items",
  },
  {
    image:
      "https://archive.esportsobserver.com/wp-content/uploads/2020/10/Riot-Games-Four-Esports-One-Year-2020.jpg",
    title: "Riot homepage clone",
    link: "https://banban911.github.io/Briot/",
    description:
      "First React-based app intergrated by riot APIs, I build a new collection included Riot homepage, LOL universe and LOL.vn.",
    sourceCode: "https://github.com/banban911/Briot",
    techs: [
      "https://img.icons8.com/color/48/000000/react-native.png",
      "https://img.icons8.com/color/48/000000/javascript--v1.png",
      "https://img.icons8.com/color/48/000000/sass.png",
      "https://img.icons8.com/color/50/000000/bootstrap.png",
    ],
    drawback:
      "Scroll behavior work improperly, fetching data take much time or unified layout",
  },
  {
    image:
      "https://media-exp1.licdn.com/dms/image/C511BAQHzmaGH1-wcsQ/company-background_10000/0/1563093073691?e=2159024400&v=beta&t=JzN1HhvT2W7gNyLIB4UE12J5REVCNj3qgQC-1qHr9B4",
    title: "ED, HANU",
    link: "https://banban911.github.io/15A17_Hanu/",
    description:
      "During waiting for graduation ceremory, I cloned the landing page of my department website which is the English Department, HANU",
    sourceCode: "https://github.com/banban911/15A17_Hanu",
    techs: [
      "https://img.icons8.com/color/48/000000/javascript--v1.png",
      "https://img.icons8.com/color/48/000000/sass.png",
      "https://img.icons8.com/color/50/000000/bootstrap.png",
    ],
    drawback: "Css code is quite mess, height of carousel depends",
  },
  {
    image:
      "https://media-exp1.licdn.com/dms/image/C511BAQHzmaGH1-wcsQ/company-background_10000/0/1563093073691?e=2159024400&v=beta&t=JzN1HhvT2W7gNyLIB4UE12J5REVCNj3qgQC-1qHr9B4",
    title: "Another app",
    link: "https://banban911.github.io/Briot/",
    description:
      "In time waiting for graduation ceremory, I cloned the landing page of my department website. I hope it will be a game app",
    sourceCode: "https://github.com/banban911/Briot",
    techs: [
      "https://img.icons8.com/color/48/000000/javascript--v1.png",
      "https://img.icons8.com/color/48/000000/sass.png",
      "https://img.icons8.com/color/50/000000/bootstrap.png",
    ],
    drawback: "Not happen, guess it will be game app, and hei dude, do it",
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
          />
        </Box>
      ))}
    </div>
  );
};

export default Projects;
