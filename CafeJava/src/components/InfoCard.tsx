function InfoCard() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <a href="https://google.com" target="_blank" className="">
          <div
            className="card bg-custom-black25 custom-max-width "
            style={{
              minHeight: "20rem",
              backgroundImage:
                'url("https://chateaudubaffy.education/wp-content/uploads/2024/06/Select-Website-Carousel-1920px-x-800px-Geography-1.jpg")',
              backgroundSize: "cover",
              opacity: "0.7",
            }}
          >
            <div className="card-body d-flex justify-content-center align-items-end">
              <p className="card-text fw-bold" >
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default InfoCard;
