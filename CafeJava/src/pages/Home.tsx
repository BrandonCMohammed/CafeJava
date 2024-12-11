import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />

      <div className="container-fluid py-6 bg-custom-black75">
        <div className="row gy-3 gx-5">
          <div className="col-lg">
            <InfoCard />
          </div>

          <div className="col-lg">
            <InfoCard />
          </div>

          <div className="col-lg">
            <InfoCard />
          </div>
        </div>
      </div>

      <div className="container-fluid py-6">
        <div className="row gy-3 gx-5">
          <div className="col d-flex justify-content-center">
            <ProductCard />
          </div>
          <div className="col d-flex justify-content-center">
            <ProductCard />
          </div>
          <div className="col d-flex justify-content-center">
            <ProductCard />
          </div>
          <div className="col d-flex justify-content-center">
            <ProductCard />
          </div>
          <div className="col d-flex justify-content-center">
            <ProductCard />
          </div>
          <div className="col d-flex justify-content-center">
            <ProductCard />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <Footer />
      </div>
    </>
  );
}

export default Home;
