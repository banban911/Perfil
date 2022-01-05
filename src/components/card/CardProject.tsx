import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Typography,
} from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import "./Card.scss";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

// interface mediaProps {
//   image: string;
//   title: string;
// }

export default function CardProject(props: any) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { image, title, techs, link, description, sourceCode, drawback } =
    props;
  return (
    <div className='cardProject'>
      <Card>
        <Typography variant='h6' sx={{ p: 1 }}>
          {title}
        </Typography>
        <a href={link}>
          <CardMedia component='img' height='194' image={image} alt={title} />
          <CardContent>
            <div className='description'>
              <Typography variant='body2' color='text.secondary'>
                {description}
              </Typography>
            </div>
          </CardContent>
        </a>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph>Tech included</Typography>
            <div className='techIncluded'>
              {techs.map((tech: string, index: number) => (
                <IconButton key={index}>
                  <div
                    style={{
                      backgroundImage: `url(${tech})`,
                      backgroundSize: "cover",
                      maxWidth: "60px",
                      maxHeight: "60px",
                      minWidth: "45px",
                      minHeight: "45px",
                    }}
                  ></div>
                </IconButton>
              ))}
            </div>

            <a href={sourceCode}>
              <Button variant='contained'>Source code</Button>
            </a>
            <Typography sx={{ margin: "1rem 0" }}>
              <strong>Backlash: </strong>
              {drawback}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
