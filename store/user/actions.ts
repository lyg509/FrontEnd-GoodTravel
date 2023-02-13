import { createAction, createAsyncAction } from 'typesafe-actions';
import { Like, SignIn, SignUp } from './types';

export const LIKE_COURSE_REQUEST = 'user/LIKE_COURSE_REQUEST';
export const LIKE_COURSE_SUCCESS = 'user/LIKE_COURSE_SUCCESS';
export const LIKE_COURSE_FAILURE = 'user/LIKE_COURSE_FAILURE';

export const UNLIKE_COURSE_REQUEST = 'user/UNLIKE_COURSE_REQUEST';
export const UNLIKE_COURSE_SUCCESS = 'user/UNLIKE_COURSE_SUCCESS';
export const UNLIKE_COURSE_FAILURE = 'user/UNLIKE_COURSE_FAILURE';

export const SIGN_IN_REQUEST = 'user/SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'user/SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'user/SIGN_IN_FAILURE';

export const SIGN_UP_REQUEST = 'user/SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'user/SIGN_UP_FAILURE';

export const SET_LOG_OUT = 'user/SET_LOG_OUT';

export const likeCourse = createAsyncAction(
  LIKE_COURSE_REQUEST,
  LIKE_COURSE_SUCCESS,
  LIKE_COURSE_FAILURE,
)<Like, Like, Error>();

export const signIn = createAsyncAction(
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
)<SignIn, string, Error>();

export const signUp = createAsyncAction(
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
)<SignUp, string, Error>();

export const logOut = createAction(SET_LOG_OUT)();