import React from "react";
import HoverRating from "../rating/HoverRating";

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
            <a href='#'>Privacy</a>
          </li>
          <li>
            <a href='#'>APIs</a>
          </li>
          <li>
            <a href='#'>@Mui</a>
          </li>
          <li>
            <a href='#'>@unDraw</a>
          </li>
          <li>
            <a href='#'></a>
          </li>
          <li>
            <a>
              <HoverRating />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
