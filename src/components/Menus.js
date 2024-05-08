import React from "react";
import { price } from "../utils/price";

const Menus = ({ menu, addCart }) => {
  return (
    // card produk
    <div
      className="shadow-lg rounded-md p-6 mb-2 w-full"
      onClick={() => addCart(menu)}
    >
      <img
        src={
          "assets/images/" +
          menu.category.nama.toLowerCase() +
          "/" +
          menu.gambar
        }
        alt={menu.nama}
        className="w-full h-48 object-cover object-center rounded-md"
      ></img>
      <h4 className="font-semibold mt-3">
        <span className="text-slate-500 mr-1">({menu.kode})</span>
        {menu.nama}
      </h4>
      <p className="text-sm text-slate-600">Rp {price(menu.harga)}</p>
    </div>
  );
};

export default Menus;
