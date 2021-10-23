import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

interface image {
  img: string;
  title: string;
}

export default function ImageListHome<FunctionComponent>({ itemData }: any) {
  return (
    <ImageList variant='masonry' cols={3} gap={8}>
      {itemData.map((item: image) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading='lazy'
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
