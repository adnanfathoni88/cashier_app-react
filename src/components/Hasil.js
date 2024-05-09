import React, { Component } from "react";
import { price } from "../utils/price";
import TotalBayar from "./totalBayar";
import Modal from "./Modal";

export default class Hasil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      keranjangDetail: false,
      jumlah: 0,
      keterangan: "",
    };
  }

  // show detail keranjang
  showModal = (value) => {
    this.setState({
      keranjangDetail: value,
      showModal: true,
      jumlah: value.jumlah,
      keterangan: value.keterangan,
    });

    console.log(value.jumlah);
  };

  // tambah
  tambah = () => {
    this.setState(
      (prevState) => ({
        jumlah: prevState.jumlah + 1,
      }),
      () => {
        console.log(this.state.jumlah);
      }
    );
  };

  // kurang
  kurang = () => {
    if (this.state.jumlah > 1) {
      this.setState(
        (prevState) => ({
          jumlah: prevState.jumlah - 1,
        }),
        () => {
          console.log(this.state.jumlah);
        }
      );
    }
  };

  render() {
    const { carts } = this.props;
    const { showModal } = this.state;
    const { keranjangDetail } = this.state;

    return (
      <div className="w-1/3 mt-4 h-100 px-6 relative">
        <h4 className="font-semibold text-3xl">Hasil</h4>
        <div className="bg-sky-600">
          {showModal && (
            <Modal
              keranjangDetail={keranjangDetail}
              kurang={this.kurang}
              tambah={this.tambah}
            ></Modal>
          )}
        </div>
        {carts.length !== 0 && (
          <div className="mt-4">
            {carts.map((cart) => (
              <div
                key={cart.id}
                className="py-2 flex items-center border-b justify-between"
                onClick={() => this.showModal(cart)}
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
