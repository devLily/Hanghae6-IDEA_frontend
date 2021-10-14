import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../utils/apis";

import { actionCreators as postActions } from "./post";

<<<<<<< HEAD
const LOAD_WISHS = "LOAD_WISHS";
const ADD_WISH = "ADD_WISH";
const DELETE_WISH = "DELETE_WISH";

const loadWishs = createAction(LOAD_WISHS, (list) => ({ list }));
const addWish = createAction(ADD_WISH, (postId, email) => ({ postId, email }));
const deleteWish = createAction(DELETE_WISH, (postId, email) => ({
  postId,
  email,
}));

const initialState = {
  list: [],
};

const getWishList = (email) => {
  return (dispatch) => {
    if (!email) return;

    apis
      .getWishs()
      .then((res) => {
        const wishList = res.data.wish;
        dispatch(loadWishs(wishList));
      })
      .catch((error) => {
        window.alert("위시리스트를 불러오는데 실패하였습니다.");
        console.error(error);
      });
  };
};

const addWishItem = (email, postId) => {
  return (dispatch) => {
    if (!email) return;

    console.log(email, postId);

    apis
      .addWish(email, postId)
      .then((res) => {
        console.log("res", res);
        const wishItem = res?.data.wish;
        if (wishItem) {
          dispatch(addWish(wishItem));
          window.alert("위시리스트에 등록되었습니다!");
        }
      })
      .catch((error) => {
        window.alert("위시리스트에 등록되지 않았습니다. 다시 시도해주세요!");
        console.error(error);
      });
  };
};

const deleteWishItem = (email, wishId) => {
  return (dispatch) => {
    if (!email) return;

    apis
      .deleteWish(email, wishId)
      .then((res) => {
        if (res?.data?.result === "success") {
          dispatch(deleteWish(wishId));
          window.alert("위시리스트에서 삭제되었습니다!");
        }
      })
      .catch((error) => {
        window.alert("위시리스트에셔 삭제되지 않았습니다. 다시 시도해주세요!");
        console.error(error);
      });
  };
};

export default handleActions(
  {
    [LOAD_WISHS]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
    [ADD_WISH]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.wishItem);
      }),
    [DELETE_WISH]: (state, action) =>
      produce(state, (draft) => {
        // 같은 postId를 배열에서 찾아서 is_like를 바꿔준다.
        draft.list = state.list.filter(
          (wishItem) => wishItem !== action.payload.wishId
        );
        // draft.list.push(action.payload.list);
      }),
  },
  initialState
);

export const actionCreators = {
  getWishList,
  addWishItem,
  deleteWishItem,
};
=======
const SET_WISH = "SET_WISH";
const ADD_WISH = "ADD_WISH";
const DELETE_WISH = "DELETE_WISH";
>>>>>>> 60ac55797b59900453ed884bbf15b5b5ed37b8b0
