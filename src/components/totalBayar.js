import React from "react";
import { price } from "../utils/price";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const TotalBayar = (props) => {
  const navigate = useNavigate();

  const submitOrder = (total) => {
    const pesanans = {
      total_bayar: total,
      menus: props.carts,
    };

    axios.post(API_URL + "pesanans", pesanans).then((res) => {
      navigate("/sukses");
    });
  };

  const total = props.carts.reduce((result, item) => {
    return result + item.total_harga;
  }, 0);

  return (
    <div className="fixed bottom-0 right-0 bg-white p-6 w-96">
      <h5 className="">Total Harga: Rp {price(total)}</h5>
      <button
        className="bg-sky-600 py-2 px-6 w-full mt-2 rounded-md text-white hover:bg-sky-800"
        onClick={() => submitOrder(total)}
      >
        Bayar
      </button>
    </div>
  );
};

export default TotalBayar;
