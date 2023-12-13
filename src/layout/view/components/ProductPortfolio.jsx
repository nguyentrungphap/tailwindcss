import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function ProductPortfolio() {
  return (
    <div>
      <div className="title">
        <h6>
          <FontAwesomeIcon icon={faBars} /> Danh Mục Sản Phẩm
        </h6>
      </div>
      <div className="content ">
        <div className="p-3">Sản Phẩm 1</div>
        <div className="p-3">Sản Phẩm 2</div>
        <div className="p-3">Sản Phẩm 3</div>
        <div className="p-3">Sản Phẩm 4</div>
        <div className="p-3">Sản Phẩm 5</div>
      </div>
    </div>
  );
}

export default ProductPortfolio;
