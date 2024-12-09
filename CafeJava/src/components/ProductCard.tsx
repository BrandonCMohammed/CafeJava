import CafeJavaLogo from "../assets/CafeJava Logo.png";

function ProductCard() {
  return (
    <>
      <a href="https://google.com" target="_blank">
        <div
          className="card bg-secondary d-inline-flex "
          style={{ width: "200px", height: "304px" }}
        >
          <img src={CafeJavaLogo} className="card-img-top" alt="..."></img>
          <div className="card-body d-flex justify-content-center align-items-end">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </a>
    </>
  );
}

export default ProductCard;
