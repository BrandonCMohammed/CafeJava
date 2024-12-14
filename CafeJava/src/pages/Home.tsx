import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import TestimonialCard from "../components/TestimonialCard";

function Home() {
  return (
    <>
      <Header />

      <div className="container-fluid py-6 bg-custom-black10">
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

      <div className="container-fluid text-center py-6 bg-custom-black10">
        <div className="row justify-content-center ">
          <div className="col d-flex justify-content-center">
            <TestimonialCard />
          </div>
          <div className="col d-flex justify-content-center">
            <TestimonialCard />
          </div>
          <div className="col d-flex justify-content-center">
            <TestimonialCard />
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
