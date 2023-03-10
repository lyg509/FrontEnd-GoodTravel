import {
  likeCourse,
  myCourse,
  mypageInfo,
  saveTestResult,
  signIn,
  signUp,
  unlikeCourse,
  userInfo,
} from './actions';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  LikeCourseAPI,
  MypageInfoAPI,
  SaveTestResultAPI,
  SignInAPI,
  SignUpAPI,
  UnlikeCourseAPI,
  UserCoursesAPI,
  UserInfoAPI,
} from './api';
import { Course, MypageDetail, SignInSuccess, UserDetail } from './types';
import { getTourDetail } from '../record';

function* signInSaga({ payload }: ReturnType<typeof signIn.request>) {
  try {
    const result: SignInSuccess = yield call(SignInAPI, payload);
    yield put(signIn.success(result));
    yield put(userInfo.request(result.userEmail)); // 로그인 성공 시 userInfo 불러오기
    sessionStorage.setItem('userToken', result.token); // userToken 세션스토리지 저장
    sessionStorage.setItem('userEmail', result.userEmail); // userToken 세션스토리지 저장
  } catch (error) {
    alert('아이디나 비밀번호가 일치하지 않습니다.');
    console.log(error);
  }
}

function* signUpSaga({ payload }: ReturnType<typeof signUp.request>) {
  try {
    const result: string = yield call(SignUpAPI, payload);
    yield put(signUp.success(result));
    return result;
  } catch (error) {
    alert('사용할 수 없는 아이디 입니다.');
    console.log(error);
  }
}

function* userInfoSaga({ payload }: ReturnType<typeof userInfo.request>) {
  try {
    const result: UserDetail = yield call(UserInfoAPI, payload);
    yield put(userInfo.success(result));
    yield put(getTourDetail.request(result.userInfo.userId));
    return result;
  } catch (error) {
    console.log(error);
  }
}

function* mypageInfoSaga({ payload }: ReturnType<typeof mypageInfo.request>) {
  try {
    const result: MypageDetail = yield call(MypageInfoAPI, payload);
    yield put(mypageInfo.success(result));
    return result;
  } catch (error) {
    console.log(error);
  }
}

function* likeCourseSaga({ payload }: ReturnType<typeof likeCourse.request>) {
  try {
    yield call(LikeCourseAPI, payload);
    yield put(likeCourse.success(payload));
  } catch (error) {
    console.log(error);
  }
}
function* unlikeCourseSaga({
  payload,
}: ReturnType<typeof unlikeCourse.request>) {
  try {
    yield call(UnlikeCourseAPI, payload);
    yield put(unlikeCourse.success(payload));
  } catch (error) {
    console.log(error);
  }
}

function* saveTestResultSaga({
  payload,
}: ReturnType<typeof saveTestResult.request>) {
  try {
    const result: number = yield call(SaveTestResultAPI, payload);
    yield put(saveTestResult.success(result));
  } catch (error) {
    console.error(error);
  }
}

function* myCourseSaga({ payload }: ReturnType<typeof myCourse.request>) {
  try {
    const result: Course[] = yield call(UserCoursesAPI, payload);
    yield put(myCourse.success(result));
  } catch (error) {
    console.error(error);
  }
}

export function* userSaga() {
  yield all([
    takeLatest(signIn.request, signInSaga),
    takeLatest(signUp.request, signUpSaga),
    takeLatest(userInfo.request, userInfoSaga),
    takeLatest(mypageInfo.request, mypageInfoSaga),
    takeLatest(likeCourse.request, likeCourseSaga),
    takeLatest(unlikeCourse.request, unlikeCourseSaga),
    takeLatest(saveTestResult.request, saveTestResultSaga),
    takeLatest(myCourse.request, myCourseSaga),
  ]);
}