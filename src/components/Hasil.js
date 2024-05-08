import React, { Component } from "react";
import { price } from "../utils/price";
import TotalBayar from "./totalBayar";

export default class Hasil extends Component {
  componentDidMount() {
    console.log(this.props.history);
  }

  render() {
    const { carts } = this.props;

    return (
      <div className="w-1/3 mt-4 h-100 px-6">
        <h4 className="font-semibold text-3xl">Hasil</h4>

        {carts.length !== 0 && (
          <div className="mt-4">
            {carts.map((cart) => (
              <div
                key={cart.id}
                className="py-2 flex items-center border-b justify-between"
              >
                <div>
                  <h4 className="text-slate-800 font-semibold text-md">
                    {cart.product.nama}
                  </h4>
                  <h4 className="text-sm mb-2 text-slate-600">
                    Rp{price(cart.product.harga)}
                  </h4>
                </div>
                <div>
                  <h5 className="text-slate-500 ">
                    (x{cart.jumlah})
                    <span className="font-base pl-1 text-slate-400">
                      Rp {price(cart.total_harga)}
                    </span>
                  </h5>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4">
          <TotalBayar carts={carts} {...this.props} />
        </div>
      </div>
    );
  }
}
