import axios from "axios";
import React, { Component } from "react";
import { API_URL } from "./index";
import { Icon } from "./index";

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
    const { changeCategory, chosenCategory } = this.props;

    return (
      <div className="h-full w-1/6 bg-slate-700 p-6 text-white rounded-r-lg fixed">
        <h4 className="font-semibold text-3xl">Kategori</h4>
        {/* loop categories */}
        <div className="mt-4">
          {categories &&
            categories.map((category) => (
              <div
                key={category.id}
                className={`p-4 hover:bg-slate-600 rounded-lg transition-all duration-100 text-slate-300 ${
                  chosenCategory === category.nama ? "bg-slate-600" : ""
                }`}
                onClick={() => changeCategory(category.nama)}
              >
                <div className="flex">
                  <Icon nama={category.nama}></Icon> {category.nama}
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
