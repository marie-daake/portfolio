import PhotoAlbum from "react-photo-album";
import { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";

const photos = [
  { src: "assets/portfolio/base.png", width: 380, height: 1100 },
  { src: "assets/portfolio/blinkie.gif", width: 143, height: 184 },
  { src: "assets/portfolio/broken.png", width: 1004, height: 1264 },
  { src: "assets/portfolio/koi.png", width: 933, height: 1722 },
  { src: "assets/portfolio/cocktail.png", width: 220, height: 512 },
  { src: "assets/portfolio/cookie.png", width: 6512, height: 4169 },
  { src: "assets/portfolio/cookies.png", width: 498, height: 498 },
  { src: "assets/portfolio/cupcakes.png", width: 2077, height: 1625 },
  { src: "assets/portfolio/dagger.png", width: 743, height: 740 },
  { src: "assets/portfolio/donuts.png", width: 5997, height: 2804 },
  { src: "assets/portfolio/yinyang.png", width: 1281, height: 1311 },
];

function ArtGallery() {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <div className="content">
        <h2>My artwork</h2>
        <p>
          I have done artwork in various forms, from pixel art and animation all
          the way to working with an image with hundreds of vector points.
        </p>
        <PhotoAlbum
          photos={photos}
          layout="masonry"
          columns={5}
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
export default ArtGallery;
