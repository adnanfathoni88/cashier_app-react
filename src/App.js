import axios from "axios";
import React, { Component } from "react";
import { Category, Hasil, API_URL, Menus } from "./components/index";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
    };
  }

  componentDidMount() {
    axios.get(API_URL + "products").then((res) => {
      const menus = res.data;
      this.setState({ menus });
    });
  }

  render() {
    // deklarasi menu
    const { menus } = this.state;
    return (
      <div className="container  flex mx-auto">
        <Category />
        <div className="w-full p-6 h-100">
          <h4 className="font-semibold text-3xl">List Produk</h4>
          <div className="grid grid-cols-3 gap-6 mt-8">
            {menus && menus.map((menu) => <Menus key={menu.id} menu={menu} />)}
          </div>
        </div>
        <Hasil />
      </div>
    );
  }
}
