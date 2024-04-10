import PhotoAlbum from "react-photo-album";
import { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";

const photos = [
  { src: "assets/portfolio/flyer1.png", width: 1700, height: 2200 },
  { src: "assets/portfolio/flyer2.png", width: 1700, height: 2200 },
  { src: "assets/portfolio/flyer3.png", width: 1700, height: 2200 },
  { src: "assets/portfolio/flyer4.png", width: 1700, height: 2200 },
  { src: "assets/portfolio/businesscards1.jpg", width: 1700, height: 2200 },
  { src: "assets/portfolio/businesscards2.jpg", width: 1700, height: 2200 },
  { src: "assets/portfolio/monogramletterhead.png", width: 1700, height: 2200 },
  { src: "assets/portfolio/monogramenvelope.png", width: 2733, height: 2804 },
  { src: "assets/portfolio/monogramreturnlabel.png", width: 591, height: 218 },
  { src: "assets/portfolio/monogramseal.png", width: 629, height: 629 },
  {
    src: "assets/portfolio/butterflyletterhead.png",
    width: 1700,
    height: 2200,
  },
  { src: "assets/portfolio/butterflyenvelope.png", width: 2733, height: 2804 },
  { src: "assets/portfolio/butterflyreturnlabel.png", width: 591, height: 218 },
  { src: "assets/portfolio/butterflyseal.png", width: 629, height: 629 },
  { src: "assets/portfolio/sakuraletterhead.png", width: 1700, height: 2200 },
  { src: "assets/portfolio/sakuraenvelope.png", width: 2733, height: 2804 },
  { src: "assets/portfolio/sakurareturnlabel.png", width: 591, height: 218 },
  { src: "assets/portfolio/sakuraseal.png", width: 629, height: 629 },
];

export default function OtherGallery() {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <div className="content">
        <h2>Other design work</h2>
        <p>
          I enjoy doing desktop publishing, which includes the design of fliers,
          business cards, letterheads/stationary. These are some of the examples
          of the designs I have done that don't fit into the other categories.
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
