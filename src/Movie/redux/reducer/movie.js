import data from "../../danhSachGhe.json";
let initialState = {
  dsGhe: data,
  cart: [],
};

export let movieReducer = (state = initialState, action) => {
  console.log(" 😂 ~ movieReducer ~ action:", action);
  switch (action.type) {
    case "ADD_TO_CART": {
      const newcart = [...state.cart];
      const newHangGhe = [...state.dsGhe];

      const indexHangGhe = newHangGhe.findIndex(
        (item) => item.hang === action.payload.hang
      );

      const newDanhSachHangGhe = [...newHangGhe[indexHangGhe].danhSachGhe];

      const indexGhe = newDanhSachHangGhe.findIndex(
        (_item) => _item.soGhe === action.payload.soGhe
      );

      state.dsGhe[indexHangGhe].danhSachGhe[indexGhe] = {
        ...newDanhSachHangGhe[indexGhe],
        dangChon: true,
      };

      console.log(" 😂 ~ movieReducer ~ payload:", action.payload);

      const indexCart = newcart.findIndex(
        (item) => item.soGhe === action.payload.soGhe
      );

      if (indexCart !== -1) {
        // newcart[indexCart].quantity +=1;
      } else {
        newcart.push({ ...action.payload, daDat: true, quantity: 1 });
      }
      state.cart = newcart;
      state.dsGhe = [...newHangGhe];
      return { ...state, dsGhe: [...newHangGhe] };
    }

    case "REMOVE_CART": {
      console.log(action.payload);
      const newcart = [...state.cart].filter(
        (item) => item.soGhe !== action.payload.soGhe
      );
      const newHangGhe = [...state.dsGhe];

      const indexHangGhe = newHangGhe.findIndex(
        (item) => item.hang === action.payload.hang
      );

      const newDanhSachHangGhe = [...newHangGhe[indexHangGhe].danhSachGhe];

      const indexGhe = newDanhSachHangGhe.findIndex(
        (_item) => _item.soGhe === action.payload.soGhe
      );

      state.dsGhe[indexHangGhe].danhSachGhe[indexGhe] = {
        ...newDanhSachHangGhe[indexGhe],
        dangChon: false,
      };

      console.log(" 😂 ~ movieReducer ~ payload:", action.payload);

      state.cart = newcart;
      state.dsGhe = [...newHangGhe];
      return { ...state, dsGhe: [...newHangGhe] };
    }
    case "THANH_TOAN": {
      console.log(";thanhtoasn");
      const newHangGhe = [...state.dsGhe];
      state.cart.forEach((_item) => {
        const indexHangGhe = newHangGhe.findIndex(
          (item) => item.hang === _item.hang
        );

        const newDanhSachHangGhe = [...newHangGhe[indexHangGhe].danhSachGhe];

        const indexGhe = newDanhSachHangGhe.findIndex(
          (__item) => __item.soGhe === _item.soGhe
        );

        state.dsGhe[indexHangGhe].danhSachGhe[indexGhe] = {
          ...newDanhSachHangGhe[indexGhe],
          dangChon: false,
          daDat: true,
        };

        console.log(" 😂 ~ movieReducer ~ payload:", action.payload);

        state.dsGhe = [...newHangGhe];
      });

      return { ...state, dsGhe: [...newHangGhe], cart: [] };
    }

    default:
      return { ...state };
  }
};
