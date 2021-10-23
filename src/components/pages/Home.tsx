import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  Chip,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SendIcon from "@mui/icons-material/Send";

import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
//
import hanuLib1 from "../../image/hanuLib1.jpg";
import hanu2 from "../../image/hanu2.jpeg";
import hanu1 from "../../image/hanu1.jpeg";
import hanu3 from "../../image/hanu3.jpg";
import hanu4 from "../../image/hanu4.jpg";
import hanu5 from "../../image/hanu5.jpg";
import myClass2 from "../../image/15a17_speaking.jpg";
import myClass1 from "../../image/class.jpg";
import professora from "../../image/professora.jpg";
import clipPathShape1 from "../../image/clipPathShape1.svg";

import ImageListHome from "../imageList/ImageListHome";

// context

import "./style.scss";
interface image {
  img: string;
  title: string;
}

const itemData: image[] = [
  {
    img: `${hanu1}`,
    title: "Bed",
  },
  {
    img: `${hanuLib1}`,
    title: "Books",
  },
  {
    img: `${hanu5}`,
    title: "Sink",
  },
  {
    img: `${hanu3}`,
    title: "Books",
  },
  {
    img: `${professora}`,
    title: "Books",
  },
  {
    img: `${myClass2}`,
    title: "Books",
  },
  {
    img: `${hanu2}`,
    title: "Books",
  },
  {
    img: `${myClass1}`,
    title: "Books",
  },
  {
    img: `${hanu4}`,
    title: "Books",
  },
];
const Home = () => {
  const [imageClipPathSize, setImageClipPathSize] = useState([]);

  useEffect(() => {
    const imageClipPath = document.getElementById("imageClipPath");
    // const imageClipPathWidth = imageClipPath.clientWidth;
    // const imageClipPathHeight = imageClipPath.clientHeight;

    setImageClipPathSize([]);
  }, []);

  return (
    <Fragment>
      <div className='home_container'>
        <div
          style={{
            flex: "0 0 50%",
            padding: "2rem",
            height: "inherit",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2 className='name'>NGUYEN DUY BAN</h2>
          <h3>Apply for Front-end Web developer</h3>
          <p>
            Hanoi-based English-major graduate come to web development by chance
            but will engage by all enthusiasm.
          </p>
          <Stack direction='row' spacing={2} pt={3}>
            <Button
              size='medium'
              color='primary'
              variant='contained'
              endIcon={<ChevronRightIcon />}
            >
              Contact
            </Button>
            <Button color='primary' variant='outlined' endIcon={<SendIcon />}>
              Comment
            </Button>
          </Stack>
          <Stack direction='row' spacing={2} py={3}>
            <IconButton
              aria-label='github'
              size='large'
              sx={{ color: "#353333" }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton aria-label='linkedin' color='info' size='large'>
              <LinkedInIcon />
            </IconButton>
            <IconButton
              aria-label='email'
              size='large'
              sx={{ color: "#353333" }}
            >
              <RedditIcon />
            </IconButton>
            <IconButton aria-label='twitter' color='info' size='large'>
              <TwitterIcon />
            </IconButton>
          </Stack>
        </div>
        <div className='my_images'>
          <Box
            sx={{
              flex: "0 0 50%",
              backgroundColor: "transparent",
            }}
          >
            <div
              id='imageClipPath'
              style={{
                width: "100%",

                // clipPath: `path(M0.82933 0.21542C0.59422 -0.09947 0.44396 0.00368 0.37663 0.08769C0.23379 0.26594 -0.04007 0.67313 0.00723 0.8759C0.06635 1.12936 0.58939 0.92162 0.78661 0.84956C0.98383 0.7775 1.12322 0.60902 0.82933 0.21542Z)`,
              }}
            >
              <ImageListHome itemData={itemData} />
            </div>
          </Box>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
