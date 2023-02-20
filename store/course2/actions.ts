import { createAsyncAction } from 'typesafe-actions';
import { AreaCourse, CourseDetail, MainData } from './types';

// 메인 페이지 데이터 가져오기
export const GET_MAIN_DATA_REQUEST = 'course2/GET_MAIN_DATA_REQUEST';
export const GET_MAIN_DATA_SUCCESS = 'course2/GET_MAIN_DATA_SUCCESS';
export const GET_MAIN_DATA_FAILURE = 'course2/GET_MAIN_DATA_FAILURE';

// 코스 상세정보 가져오기
export const GET_COURSE_DETAIL_REQUEST = 'course2/GET_COURSE_DETAIL_REQUEST';
export const GET_COURSE_DETAIL_SUCCESS = 'course2/GET_COURSE_DETAIL_SUCCESS';
export const GET_COURSE_DETAIL_FAILURE = 'course2/GET_COURSE_DETAIL_FAILURE';

// 지역별 코스 가져오기
export const GET_AREA_COURSES_REQUEST = 'course2/GET_AREA_COURSES_REQUEST';
export const GET_AREA_COURSES_SUCCESS = 'course2/GET_AREA_COURSES_SUCCESS';
export const GET_AREA_COURSES_FAILURE = 'course2/GET_AREA_COURSES_FAILURE';

// 액션 생성 함수
export const getMainData = createAsyncAction(
  GET_MAIN_DATA_REQUEST,
  GET_MAIN_DATA_SUCCESS,
  GET_MAIN_DATA_FAILURE,
)<number, MainData, Error>();

export const getCourseDetail = createAsyncAction(
  GET_COURSE_DETAIL_REQUEST,
  GET_COURSE_DETAIL_SUCCESS,
  GET_COURSE_DETAIL_FAILURE,
)<number, CourseDetail, Error>();

export const getAreaCourses = createAsyncAction(
  GET_AREA_COURSES_REQUEST,
  GET_AREA_COURSES_SUCCESS,
  GET_AREA_COURSES_FAILURE,
)<string, AreaCourse[], Error>();