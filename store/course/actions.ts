import { createAction, createAsyncAction } from 'typesafe-actions';
import { CourseDetail, KeywordCourse, SearchCourse } from './types';

export const SEARCH_COURSE_REQUEST = 'course/SEARCH_COURSE_REQUEST';
export const SEARCH_COURSE_SUCCESS = 'course/SEARCH_COURSE_SUCCESS';
export const SEARCH_COURSE_FAILURE = 'course/SEARCH_COURSE_FAILURE';

// 코스 받아오기

export const RECOMMEND_COURSE_REQUEST = 'course/RECOMMEND_COURSE_REQUEST';
export const RECOMMEND_COURSE_SUCCESS = 'course/RECOMMEND_COURSE_SUCCESS';
export const RECOMMEND_COURSE_FAILURE = 'course/RECOMMEND_COURSE_FAILURE';

// // 키워드 코스 받아오기

// export const KEYWORD_COURSE_REQUEST = 'course/KEYWORD_COURSE_REQUEST';
// export const KEYWORD_COURSE_SUCCESS = 'course/KEYWORD_COURSE_SUCCESS';
// export const KEYWORD_COURSE_FAILURE = 'course/KEYWORD_COURSE_FAILURE';

// // 사용자 맞춤 코스 받아오기

// export const USER_COURSE_REQUEST = 'course/USER_COURSE_REQUEST';
// export const USER_COURSE_SUCCESS = 'course/USER_COURSE_SUCCESS';
// export const USER_COURSE_FAILURE = 'course/USER_COURSE_FAILURE';

export const SET_SEARCH_KEYWORD = 'course/SET_SEARCH_KEYWORD';

export const RESET_SEARCH_COURSES = 'course/RESET_SEARCH_COURSES';

export const searchCourse = createAsyncAction(
  SEARCH_COURSE_REQUEST,
  SEARCH_COURSE_SUCCESS,
  SEARCH_COURSE_FAILURE,
)<string, SearchCourse[], Error>();

export const recommendCourse = createAsyncAction(
  RECOMMEND_COURSE_REQUEST,
  RECOMMEND_COURSE_SUCCESS,
  RECOMMEND_COURSE_FAILURE,
)<number, CourseDetail, Error>();

export const searchKeyword = createAction(SET_SEARCH_KEYWORD)<string>();
export const resetSearchCourses = createAction(RESET_SEARCH_COURSES)();