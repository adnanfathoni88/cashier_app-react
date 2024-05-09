import React, { Component } from "react";
import { price } from "../utils/price";
import { Icon } from "./index";

const Modal = (props) => {
  const { keranjangDetail } = props;

  if (keranjangDetail) {
    return (
      <div className="p-6 my-4 w-full bg-white shadow-lg">
        <h2 className="font-semibold">
          {keranjangDetail.product.nama} - Rp
          {price(keranjangDetail.product.harga)}
        </h2>
        <hr className="my-2"></hr>
        <p></p>

        {/* jumlah */}
        <div>
          <div class="mt-2">
            <label
              for="jumlah"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Jumlah
            </label>

            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="jumlah"
                id="jumlah"
                value={price(keranjangDetail.total_harga)}
                readOnly
                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              ></input>
            </div>
          </div>

          {/* qty */}
          <div class="mt-2">
            <label
              for="qty"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Qty
            </label>
            <div className="flex justify-center items-center">
              <div
                className="cursor-pointer bg-sky-600 text-white px-2 mx-3 rounded-md hover:bg-sky-700"
                onClick={props.kurang}
              >
                <Icon nama={"minus"}></Icon>
              </div>
              <div>
                <div class="flex rounded-md w-full shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md text-center">
                  <input
                    type="text"
                    name="qty"
                    id="qty"
                    value={keranjangDetail.jumlah}
                    class="block flex-1 border-0 text-center bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  ></input>
                </div>
              </div>
              <div
                className="cursor-pointer bg-sky-600 text-white px-2 mx-3 rounded-md hover:bg-sky-700"
                onClick={props.tambah}
              >
                <Icon nama={"plus"}></Icon>
              </div>
            </div>
          </div>

          {/* keterangan */}
          <div class="mt-2">
            <div class="col-span-full">
              <label
                for="keterangan"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                keterangan
              </label>
              <textarea
                id="keterangan"
                name="keterangan"
                rows="3"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    <div className="p-6 my-4 w-full bg-white shadow-lg">
      <h2 className="font-semibold">Kosong</h2>
    </div>;
  }
};

export default Modal;
