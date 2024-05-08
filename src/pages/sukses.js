import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { API_URL } from "../utils/constants";

const Sukses = () => {
  useEffect(() => {
    axios.get(API_URL + "keranjangs").then((res) => {
      const keranjangs = res.data;
      keranjangs.map((keranjang) => {
        return axios
          .delete(API_URL + "keranjangs/" + keranjang.id)
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="w-md h-full bg-slate-100">
      <div className="flex justify-center">
        <h2 className="text-slate-700 font-bold text-4xl ">Pesanan Sukses</h2>
        <button
          className="bg-sky-600 text-white rounded-lg py-2 w-20 mt-2"
          onClick={() => navigate("/")}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Sukses;
