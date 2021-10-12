import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../utils/apis";

import { actionCreators as postActions } from "./post";

const SET_WISH = "SET_WISH";
const ADD_WISH = "ADD_WISH";
const DELETE_WISH = "DELETE_WISH";
