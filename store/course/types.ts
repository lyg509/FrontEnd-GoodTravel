import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CourseAction = ActionType<typeof actions>;

export type SearchCourseResult = {
  name: string;
};

export type SearchCourse = {
  courseId: number;
  courseName: string;
  image: string;
};

export type CourseState = {
  searchCourses: SearchCourse[];
  searchKeyword: string;
};