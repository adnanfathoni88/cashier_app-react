import axios from "axios";
import React, { Component } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

import { Category, Hasil, API_URL, Menus } from "../components/index";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
      chosenCategory: "Minuman",
      carts: [],
    };
  }

  // get product
  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.chosenCategory)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      });

    axios.get(API_URL + "keranjangs").then((res) => {
      const carts = res.data;
      this.setState({ carts });
    });
  }

  // change category
  changeCategory = (value) => {
    this.setState({
      chosenCategory: value,
      menus: [],
    });

    axios.get(API_URL + "products?category.nama=" + value).then((res) => {
      const menus = res.data;
      this.setState({ menus });
    });
  };

  // add cart
  addCart = (value) => {
    axios.get(API_URL + "keranjangs?product.id=" + value.id).then((res) => {
      if (res.data.length > 0) {
        const carts = {
          jumlah: res.data[0].jumlah + 1,
          total_harga: res.data[0].total_harga + value.harga,
          product: value,
        };

        axios
          .put(API_URL + "keranjangs/" + res.data[0].id, carts)
          .then((res) => {
            swal("Success!", "Pesanan akan diproses", "success");
          });
      } else {
        const carts = {
          jumlah: 1,
          total_harga: value.harga,
          product: value,
        };
        axios.post(API_URL + "keranjangs", carts).then((res) => {
          swal("Success!", "Pesanan akan diproses", "success");
        });
      }
    });
  };

  // update cart state
  componentDidUpdate(prevState) {
    if (this.state.carts !== prevState.carts) {
      axios.get(API_URL + "keranjangs").then((res) => {
        const carts = res.data;
        this.setState({ carts });
      });
    }
  }

  render() {
    const { menus, chosenCategory, carts } = this.state;
    return (
      <div className="container flex mx-auto">
        <Category
          changeCategory={this.changeCategory}
          chosenCategory={this.state.chosenCategory}
        />
        <div className="w-full p-6 pl-[20%]">
          <h4 className="font-semibold text-3xl">List Produk</h4>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {menus &&
              menus.map((menu) => (
                <Menus key={menu.id} menu={menu} addCart={this.addCart} />
              ))}
          </div>
        </div>
        <Hasil carts={carts} history={this.props.history} />
      </div>
    );
  }
}
