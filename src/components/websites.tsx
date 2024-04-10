import PhotoAlbum from "react-photo-album";
import { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
const photos = [
  { src: "assets/portfolio/websitedesign.png", width: 1024, height: 675 },
  { src: "assets/portfolio/websitedesign2.png", width: 1978, height: 1771 },
  { src: "assets/portfolio/websitedesign3.png", width: 1720, height: 1206 },
  { src: "assets/portfolio/websitedesign4.png", width: 1281, height: 1311 },
];

export default function WebGallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="content">
        <h2>My website designs</h2>
        <p>
          I have designed sites for myself, friends, and conventions, over the
          years. While several have been lost to time, here are some of the
          examples of websites I have designed.
        </p>
        <PhotoAlbum
          photos={photos}
          layout="masonry"
          columns={4}
          padding={10}
          spacing={20}
          targetRowHeight={150}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
    </>
  );
}
