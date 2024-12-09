function InfoCard() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <a
          href="https://google.com"
          target="_blank"
          className=""
        >
          <div
            className="card bg-secondary custom-max-width "
            style={{ minHeight: "20rem" }}
          >
            <div className="card-body d-flex justify-content-center align-items-end">
              <p className="card-text">
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
