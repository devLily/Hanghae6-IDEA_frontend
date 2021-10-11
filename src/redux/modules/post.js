import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../utils/apis";

const LOAD_POSTS = "LOAD_POSTS";

const loadPosts = createAction(LOAD_POSTS, (list) => ({ list }));

const initialState = {
  list: [],
};

const getPostList = () => {
  return (dispatch) => {
    apis
      .getPost()
      .then((res) => {
        const postList = res.data;
        dispatch(loadPosts(postList));
      })
      .catch((error) => {
        window.alert("게시물을 불러오는데 실패하였습니다.");
        console.error(error)
      })
  }
}

export default handleActions({
  [LOAD_POSTS]: (state, action) => produce(state, (draft) => {
    draft.list = action.payload.list;
  }),
}, initialState
);

export const postCreators = {
  getPostList
}
