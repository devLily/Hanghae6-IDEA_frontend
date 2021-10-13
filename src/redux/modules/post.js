import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../utils/apis";


// STATES
const initialState = {
    list: [],
};



// const initialPost = {
//     postId: "postId",
//     title: "인형같지만 진짜 인형인 춘식",
//     spec: "키 10cm x 몸무게 300g",
//     image: "https://cfnimage.commutil.kr/phpwas/restmb_allidxmake.php?idx=3&simg=202012170917410759599ebb03838180228147171.jpg",
//     nickname: "닉네임",
//     place: 2, // 침실
// }


// ACTIONS
const LOAD_POSTS = "LOAD_POSTS";



// ACTION CREATORS
const loadPosts = createAction(LOAD_POSTS, (list) => ({ list }));



// MIDDLEWARES
const getPostList = () => {
    return (dispatch) => {
        apis
            .getPost()
            .then((res) => {
                // console.log(res);
                const postList = res.data;
                dispatch(loadPosts(postList));
            })
            .catch((error) => {
                window.alert("게시물을 불러오는데 실패하였습니다.");
                console.error(error)
            })
    }
}



// REDUCER
export default handleActions({
    [LOAD_POSTS]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.list;
    }),
}, initialState
);


export const actionCreators = {
    getPostList,
}