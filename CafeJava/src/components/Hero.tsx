import HeroCarousel from "../components/HeroCarousal";

function Hero() {
  return (
    <>
      <div
        className=" bg-primary row"
        style={{ height: "400px" }}
      >
        <div className="col ">
          <HeroCarousel />
        </div>
      </div>
    </>
  );
}

export default Hero;
