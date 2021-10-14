import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// STATES
const initialState = {
  image_url:
    "https://thesocialstudies.co/wp-content/uploads/2021/06/placeholder-1-1.jpg",
  uploading: false,
  preview: null,
};

// ACTIONS
const SET_PREVIEW = "SET_PREVIEW";
const GET_IMAGE_URL = "GET_IMAGE_URL";

// ACTION CREATORS
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));
const getImageURL = createAction(GET_IMAGE_URL, (image_url) => ({ image_url }));

// MIDDLEWARES

// REDUCER
export default handleActions(
  {
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
        // console.log("이미지 프리뷰 생성");
      }),
    [GET_IMAGE_URL]: (state, action) =>
      produce(state, (draft) => {
        // console.log(`이미지URL: ${action.payload.image_url}`);
        draft.image_url = action.payload.image_url;
      }),
  },
  initialState
);

const actionCreators = {
  setPreview,
  getImageURL,
};

export { actionCreators };
