import { createReducer } from 'typesafe-actions';
import { Course2Action, Course2State } from './types';
import produce from 'immer';
import {
  GET_AREA_COURSES_SUCCESS,
  GET_COURSE_DETAIL_SUCCESS,
  GET_MAIN_DATA_SUCCESS,
} from './actions';
import { AreaCourses } from '../../components/Main/MainPage.style';

const initialCourseInfoState = {
  // courseId: 0,
  courseName: '',
  courseContent: '',
  courseDistance: '',
  courseDays: '',
  courseHits: 0,
  // courseImage: '',
};

const initialState: Course2State = {
  areaCourseCount: [],
  areaCourses: [],
  popularCourses: [],
  courseId: 0,
  courseInfo: initialCourseInfoState,
  courseTourist: [],
  courseReview: [],
  courseType: [],
  courseTag: [],
  coursePercentage: 0,
};

const course2 = createReducer<Course2State, Course2Action>(initialState, {
  [GET_MAIN_DATA_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.areaCourseCount = action.payload.areaCourseCount;
      draft.popularCourses = action.payload.popularCourses;
    }),
  [GET_COURSE_DETAIL_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.courseId = action.payload.courseId;
      draft.courseInfo = action.payload.courseInfo;
      draft.courseTourist = action.payload.courseTourist;
      draft.courseReview = action.payload.courseReview;
      draft.courseType = action.payload.courseType;
      draft.courseTag = action.payload.courseTag;
      draft.coursePercentage = action.payload.coursePercentage;
    }),
  [GET_AREA_COURSES_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.areaCourses = action.payload;
    }),
});

export default course2;