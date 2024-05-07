import axios from "axios";
import React, { Component } from "react";
import { API_URL } from "./index";
import { FONTAWSOME_URL } from "./index";

// icon
const Icon = ({ nama }) => {
  switch (nama) {
    case "Makanan":
      return <i className="fas fa-hamburger"></i>;
    case "Minuman":
      return <i className="fas fa-coffee"></i>;
    case "Cemilan":
      return <i className="fas fa-cookie-bite"></i>;
    default:
      return <i className="fas fa-bars"></i>;
  }
};

export default class Category extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  //get kategori
  componentDidMount() {
    axios.get(API_URL + "categories").then((res) => {
      const categories = res.data;
      this.setState({ categories });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="w-1/3 h-100 p-6 bg-slate-700 text-white rounded-r-lg">
        <h4 className="font-semibold text-3xl">Kategori</h4>
        {/* loop categories */}

        <link rel="stylesheet" href={FONTAWSOME_URL} />

        <div className="mt-4">
          {categories &&
            categories.map((category) => (
              <div className="p-4 hover:bg-slate-600 rounded-lg transition-all duration-100 text-slate-300">
                <Icon nama={category.nama}></Icon> {category.nama}
              </div>
            ))}
        </div>
      </div>
    );
  }
}
