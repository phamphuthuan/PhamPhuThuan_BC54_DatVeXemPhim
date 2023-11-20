import React, { Component } from "react";
import "./style.css";
import HangGhe from "./HangGhe";
import ThongTinDatGhe from "./ThongTin";

export default class Ex_Movie extends Component {
  render() {
    return (
      <div className=" movie_center row">
        <div className="col-8">
          <HangGhe />
        </div>
        <div className="col-4">
          <ThongTinDatGhe />
        </div>
      </div>
    );
  }
}
