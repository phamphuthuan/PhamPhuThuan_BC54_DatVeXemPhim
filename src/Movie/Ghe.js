import React, { Component } from "react";
import { connect } from "react-redux";

class Ghe extends Component {
  render() {
    const { soGhe, gia, daDat, dangChon } = this.props.ghe;
    const { addToCart, hang } = this.props;
    const _index = this.props._index;

    const a = 10;
    const b = 10;
    const vairable = a !== b ? 30 : 20;

    return (
      <div>
        {_index === 0 ? (
          <button className="btn btn-success button-ghe button-row ">
            {soGhe}
          </button>
        ) : (
          <button
            onClick={() => addToCart({ soGhe, gia, daDat, hang })}
            className={`'btn mb-4 ${daDat ? "btn-warning" : "btn-secondary"} ${
              dangChon && "btn-success"
            } button-ghe'`}
          >
            {soGhe}
          </button>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (payload) => {
      dispatch({ type: "ADD_TO_CART", payload });
    },
  };
};

export default connect(null, mapDispatchToProps)(Ghe);
