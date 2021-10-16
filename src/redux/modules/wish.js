import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../utils/apis";

import { actionCreators as postActions } from "./post";

const LOAD_WISHS = "LOAD_WISHS";
const ADD_WISH = "ADD_WISH";
const DELETE_WISH = "DELETE_WISH";

const loadWishs = createAction(LOAD_WISHS, (list) => ({ list }));
// const addWish = createAction(ADD_WISH, (postId) => ({ postId }));
// const deleteWish = createAction(DELETE_WISH, (postId, email) => ({
//   postId,
//   email,
// }));

const initialState = {
  list: [],
};

const getWishList = () => {
  return (dispatch, getState) => {
    console.log("getWishList");

    apis
      .getWishs()
      .then((res) => {
        const wishList = res.data.post; // 서버에서 이렇게 post key 값으로 내려줌!
        const postList = getState().post.list;
        const newPostList = postList.map((post) => {
          let newPost = { ...post, isWished: false };

          if (wishList.length) {
            wishList.forEach((wish) => {
              // post에다가 wishId도 넣어준다!
              newPost.wishId = wish.wishId;
              // wishList에서 postList와 같은 값을 가진 postId가 있으면 위시리스트에 추가해준다!
              if (wish.postId === post.postId) {
                newPost.isWished = true;
              }
            });
          }

          return newPost;
        });
        console.log("wishList", wishList);
        console.log("newPostList", newPostList);

        dispatch(loadWishs(wishList));
        dispatch(postActions.loadPosts(newPostList));
      })
      .catch((error) => {
        window.alert("위시리스트를 불러오는데 실패하였습니다.");
        console.error(error);
      });
  };
};

const addWishItem = (postId) => {
  return (dispatch) => {
    //if (!email) return;

    console.log(postId);

    apis
      .addWish(postId)
      .then((res) => {
        console.log("res", res.data);
        // const wishItem = res?.data.wish;
        if (res?.data?.result === "success" || res.status === 200) {
          // dispatch(addWish(wishItem));
          window.alert("위시리스트에 등록되었습니다!");
        }
      })
      .catch((error) => {
        window.alert("위시리스트에 등록되지 않았습니다. 다시 시도해주세요!");
        console.error(error);
      });
  };
};

const deleteWishItem = (wishId) => {
  return (dispatch) => {
    // if (!email) return;

    apis
      .deleteWish(wishId)
      .then((res) => {
        console.log("res", res.status);
        if (res?.data?.result === "success" || res.status === 200) {
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
          (wishItem) => wishItem !== action.payload.Id
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
