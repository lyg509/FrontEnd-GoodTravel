import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import course, { courseSaga, CourseState } from './course';
import travel, { travelSaga, TravelState } from './travel';
import location, { locationSaga, LocationState } from './location';
import user, { userSaga, UserState } from './user';
import register, { registerSaga, RegisterState } from './register';

export function* rootSaga() {
  yield all([
    userSaga(),
    courseSaga(),
    travelSaga(),
    locationSaga(),
    registerSaga(),
  ]);
}

const rootReducer = combineReducers({
  user,
  course,
  travel,
  location,
  register,
});

export default rootReducer;

export type RootState = {
  user: UserState;
  course: CourseState;
  travel: TravelState;
  location: LocationState;
  register: RegisterState;
};