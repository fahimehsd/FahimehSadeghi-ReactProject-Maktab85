import React, { useState } from "react";
import EditQuantityAndPriceForm from "../../forms/EditQuantityAndPriceForm";

const PanelQuantityEdit = ({ product }) => {
  console.log(product);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6"
            stroke="gray"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {showModal && <EditQuantityAndPriceForm />}
    </>
  );
};

export default PanelQuantityEdit;
