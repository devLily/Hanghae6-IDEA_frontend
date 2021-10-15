import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../utils/apis";

const LOAD_POSTS = "LOAD_POSTS";
const ADD_POST = "ADD_POST";

const loadPosts = createAction(LOAD_POSTS, (list) => ({ list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

const initialState = {
  list: [],
};

const initialPost = {
  postId: "postId",
  title: "인형같지만 진짜 인형인 춘식",
  spec: "키 10cm x 몸무게 300g",
  image:
    "https://cfnimage.commutil.kr/phpwas/restmb_allidxmake.php?idx=3&simg=202012170917410759599ebb03838180228147171.jpg",
  nickname: "닉네임",
  place: "침실",
};

const getPostList = () => {
  return (dispatch) => {
    apis
      .getPosts()
      .then((res) => {
        //console.log("results:", res.data.results);
        const postList = res.data.results;
        dispatch(loadPosts(postList));
      })
      .catch((error) => {
        window.alert("게시물을 불러오는데 실패하였습니다.");
        console.error(error);
      });
  };
};

const createPost = (
  title = "",
  spec = "",
  place = "",
  desc = "",
  image = ""
) => {
  return function (dispatch) {
    // 게시글 형식 맞추기
    const _post = {
      title: title,
      spec: spec,
      nickname: "코드공주",
      image: image,
      place: place,
      desc: desc,
    };
    // console.log(_post);

    apis
      .createPost(_post)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default handleActions(
  {
    [LOAD_POSTS]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
        console.log(action.payload.list);
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        // console.log(action.payload.)
        // draft.list = action.payload.list;
        draft.list.push(action.payload.list);
      }),
  },
  initialState
);

export const actionCreators = {
  getPostList,
  createPost,
};
