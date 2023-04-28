import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia
} from "@material-ui/core";

const images = [
  {
    id: 1,
    url:
      "https://media.istockphoto.com/id/1454662719/photo/african-american-tourists-with-suitcases-in-front-of-the-rented-apartment.jpg?s=2048x2048&w=is&k=20&c=z0Dv4NeS1DB6pUlbihKEClQyM7GL7Rr3-eBrgCwq8ek=",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
  },
  {
    id: 2,
    url:
      "https://media.istockphoto.com/id/1394456695/photo/a-woman-at-the-airport-holding-a-passport-with-a-boarding-pass.jpg?s=2048x2048&w=is&k=20&c=Cf4kPyvtIEmi8RL-nbXkRingQSXmZQFEsb2iQuUpQkE=",
    details:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English."
  },
  {
    id: 3,
    url:
      "https://media.istockphoto.com/id/1413299539/photo/male-tourist-looking-at-arrival-and-departure-board-at-kuala-lumpur-international-airport.webp?s=2048x2048&w=is&k=20&c=j8JgY2UAj4ileR2ih2VCF2T90PqSSOOWHGdixqlmVnY=",
    details:
      'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
  },
  {
    id: 4,
    url:
      "https://media.istockphoto.com/id/1428676905/photo/family-going-to-hotel-room-with-luggage.jpg?s=2048x2048&w=is&k=20&c=lRKVEi-X4wr-hGGf8PZkd_eC3jPlfnVq5SKeoaZtvJw=",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];

const Catalog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [currentIndex, isPlaying]);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    setIsPlaying(false);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    setIsPlaying(false);
  };

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <Card style={{ width: 400, marginRight: 20 }}>
        <CardMedia
          component="img"
          height="200"
          image={images[currentIndex].url}
        />
        <CardContent>
          <p>{images[currentIndex].details}</p>
        </CardContent>
        <CardActions>
          <Button onClick={handlePrevClick}>Prev</Button>
          <Button onClick={handleNextClick}>Next</Button>
          <Button onClick={handlePlayPauseClick}>
            {isPlaying ? "Pause" : "Play"}
          </Button>
        </CardActions>
      </Card>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {images.map((img, index) => (
          <img
            key={img.id}
            src={img.url}
            alt={`Img ${img.id}`}
            style={{
              width: 100,
              height: 50,
              margin: 5,
              filter: index === currentIndex ? "none" : "grayscale(100%)"
            }}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
