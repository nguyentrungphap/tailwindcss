import React from "react";
import ProductPortfolio from "../../../layout/view/components/ProductPortfolio";
import Navbar from "../../../layout/view/components/Navbar";

function Index() {
  return (
    <div className="grid grid-cols-4 px-11 py-6">
      <div>
        <ProductPortfolio />
      </div>
      <div className="col-span-3">
        <Navbar />
      </div>
    </div>
  );
}

export default Index;
