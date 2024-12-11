import { CarouselCaption } from "react-bootstrap";
import CafeJavaLogo from "../assets/CafeJava Logo.png";

import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function HeroCarousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Image
            src={CafeJavaLogo}
            className="d-block "
            style={{ height: "400px", width: "100%", overflow: "hidden" }}
          />
          <CarouselCaption>
            <h3>1</h3>
          </CarouselCaption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={CafeJavaLogo}
            className="d-block "
            style={{ height: "400px", width: "100%", overflow: "hidden" }}
          />
          <CarouselCaption>
            <h3>2</h3>
          </CarouselCaption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={CafeJavaLogo}
            className="d-block "
            style={{ height: "400px", width: "100%", overflow: "hidden" }}
          />
          <CarouselCaption>
            <h3>3</h3>
          </CarouselCaption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HeroCarousel;
