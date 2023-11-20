import React, { Component } from "react";
import Ghe from "./Ghe";
import { connect } from "react-redux";

class HangGhe extends Component {
  renderDsGhe(dsGhe) {
    const rows = dsGhe.map((ghe, index) => {
      return (
        <div>
          <div className="d-flex justify-content-around  ">
            <button className="button-ghe button-row">{ghe.hang}</button>
            {ghe.danhSachGhe.map((item, _index) => {
              return (
                <div>
                  <Ghe hang={ghe.hang} _index={index} ghe={item} />
                </div>
              );
            })}
          </div>
        </div>
      );
    });
    return rows;
  }
  render() {
    console.log(this.props.dsGhe);
    return (
      <div>
        <h1 className="text-warning text-center font-weight-bold ">
          ĐẶT VÉ XEM PHIM
        </h1>
        <p className="text-warning text-center">Màn hình</p>
        <div className="bg-warning height-screen"></div>
        {this.renderDsGhe(this.props.dsGhe)}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dsGhe: state.movieReducer.dsGhe,
  };
};

export default connect(mapStateToProps)(HangGhe);
