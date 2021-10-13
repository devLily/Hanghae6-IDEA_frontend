import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import jwt_decode from "jwt-decode";
import { apis } from "../../utils/apis";
import { setCookie } from "../../utils/cookie";

const POST_LOGIN = "POST_LOGIN";
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

const postLogin = createAction(POST_LOGIN, (user) => ({ user }));
const setUser = createAction(SET_USER, (token) => ({ token }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

const initialState = {
  user: null,
  isLoggedIn: false,
};

const signupMiddleware = (user) => {
  return () => {
    apis
      .signUp(user)
      .then((res) => {
        console.log(res.data);
        /**
         * res: {
         *  result: string
         * }
         */

        if (res?.data?.result === "success") {
          window.alert("회원가입이 완료되었습니다.");
        }
      })
      .catch((error) => {
        const errorResposnse = error.response;
        const errorMessage =
          errorResposnse?.data?.result ?? "회원가입에 실패하였습니다.";
        window.alert(errorMessage);
      });
  };
};

const loginMiddleware = (params) => {
  return (dispatch) => {
    apis
      .login(params)
      .then((res) => {
        console.log(res.data);
        const { token } = res.data;
        dispatch(setUser(token));
        setCookie("user", token);
      })
      .catch((error) => {
        window.alert("로그인에 실패하였습니다. 다시 시도해주세요");
        console.error(error);
      });
  };
};

export default handleActions(
  {
    [POST_LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
      }),
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        const decoded = jwt_decode(action.payload.token);
        console.log(decoded);
        draft.user = decoded;
        draft.isLoggedIn = true;
      }),
  },
  initialState
);

export const actionCreators = {
  signupMiddleware,
  loginMiddleware,
  setUser,
};
