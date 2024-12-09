import NavBar from "./NavBar";
import Hero from "./Hero";

function Header() {
  return (
    <>
      <div className="max-width" style={{ height: "144px" }}>
        <NavBar />
      </div>

      <Hero />
    </>
  );
}

export default Header;
