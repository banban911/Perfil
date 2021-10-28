import React from "react";
import HoverRating from "../rating/HoverRating";
import { Link } from "@mui/material";

const Footer = () => {
  return (
    <div
      className='footer_container'
      style={{
        backgroundColor: "rgba(20, 72, 124, 0.8)",
        color: "#fff",
        fontSize: "1rem",
        padding: "1rem",
      }}
    >
      <div className='credit' style={{ marginRight: "2rem" }}>
        @NguyenDuyBan 2021.
      </div>
      <div className='otherContact'>
        <ul>
          <li>
            <a href='https://reactjs.org/'>Privacy</a>
          </li>
          <li>
            <a href='https://reactjs.org/'>APIs</a>
          </li>
          <li>
            <a href='https://mui.com/'>@Mui</a>
          </li>
          <li>
            <a href='https://undraw.co/'>@unDraw</a>
          </li>
          <li>
            <Link>
              <HoverRating />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
