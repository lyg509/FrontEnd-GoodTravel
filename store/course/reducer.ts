import { ActionType, createReducer } from 'typesafe-actions';
import { SEARCH_COURSE_SUCCESS, SET_SEARCH_KEYWORD } from './actions';
import { CourseState, CourseAction } from './types';
import produce from 'immer';

const initialState: CourseState = {
  searchCourses: [],
};

const course = createReducer<CourseState, CourseAction>(initialState, {
  [SEARCH_COURSE_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.searchCourses = action.payload;
    }),
});

export default course;