import { apis } from '../../utils/apis';
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const GET_COMMENTS = 'GET_COMMENTS';
const ADD_COMMENT = 'ADD_COMMENT';

const getComments = createAction(GET_COMMENTS, (list) => ({ list }));
const addComment = createAction(ADD_COMMENT, (list) => ({ list }));

const initialState = {
  list: [],
};

// middleware
const getCommentList = (postId) => {
  return (dispatch, getState) => {
    apis
      .getComments(postId)
      .then((res) => {
        const commentList = res?.data?.results ?? []; // res 객체의 data 객체의 results라는 필드 값이 없으면 []을 commentList 변수에 담는다는 의미
        console.log('res.data', commentList);
        dispatch(getComments(commentList));
      })
      .catch((error) => {
        window.alert('코멘트 리스트를 불러오는데 실패하였습니다.');
        console.error(error);
      });
  };
};
const addCommentItem = (postId, comment, nickname) => {
  return (dispatch, getState, { history }) => {
    // const post = getState().post.post;
    apis
      .createComment(postId, comment, nickname)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          window.alert('코멘트가 등록되었습니다!');
        }
        // console.log(post.postId);
      })
      .catch((error) => {
        window.alert('못받아따');
        console.error(error);
      });
  };
};

export default handleActions(
  {
    [GET_COMMENTS]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
  },
  initialState
);
export const actionCreators = {
  getCommentList,
  addCommentItem,
};
