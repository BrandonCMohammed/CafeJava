import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <>
      <Header />
      <div className="py-6 px-double3 flex-sm-column flex-md-row d-xl-flex justify-content-xl-between ">
        <div className="justify-content-sm-center">
          <InfoCard />
        </div>
        <div style={{ width: "25px", height: "15px" }}></div>
        <div>
          <InfoCard />
        </div>
        <div style={{ width: "25px", height: "15px" }}></div>

        <div>
          <InfoCard />
        </div>
      </div>

      <div className="py-6 px-12 d-flex justify-content-between">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
}

export default Home;
