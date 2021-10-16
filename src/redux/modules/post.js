import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../utils/apis";

const LOAD_POSTS = "LOAD_POSTS";
const LOAD_POST = "LOAD_POST";
const MERGED_POSTS = "MERGED_POSTS";
const ADD_POST = "ADD_POST";

const loadPosts = createAction(LOAD_POSTS, (list) => ({ list }));
const loadPost = createAction(LOAD_POST, (post) => ({ post })); // post 하나 가져오기!
const mergedPosts = createAction(MERGED_POSTS, (list) => ({ list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

const initialState = {
  list: [],
  post: null,
  isMergedList: false,
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

const getPostById = (postId) => (dispatch) => {
  apis
    .getPostById(postId)
    .then((res) => {
      console.log("results:", res.data);
      const postItem = res.data.results[0];
      dispatch(loadPost(postItem));
    })
    .catch((error) => {
      window.alert("게시물을 불러오는데 실패하였습니다.");
      console.error(error);
    });
};

// postList에 isWished field 추가해주기!
const mergePostList = () => {
  return (dispatch, getState) => {
    const wishList = getState().wish.list;
    const postList = getState().post.list;

    const newPostList = postList.map((post) => {
      let newPost = { ...post, isWished: false };

      if (wishList.length) {
        console.log("post", post);
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
    dispatch(mergedPosts(newPostList));

    console.log("wishList", wishList);
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
      image: image,
      place: place,
      descr: desc,
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
    [LOAD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.post = action.payload.post;
        console.log(action.payload.post);
      }),
    [MERGED_POSTS]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
        draft.isMergedList = true;
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
  loadPosts,
  getPostList,
  getPostById,
  mergePostList,
  createPost,
};
