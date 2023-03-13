import type { NextPage } from 'next';
import SearchForm from './SearchForm';
import Nav from '../Nav/Nav';
import { CourseWrapper, CourseBlock } from './Course.style';

import Footer from '../Footer/Footer';
import { Wrapper } from '../../styles/variables';
import Menu from '../Nav/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';
import { recommendCourse, resetSearchCourses } from '../../store/course';
import Loading from '../Loading/Loading';
import { KEYWORD } from '../../assets/keyword';
import CourseSlider from './CourseSlider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CourseComp: NextPage = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: RootState) => state.user);
  const { searchCourses, searchKeyword, keywordCourses, userCourses } =
    useSelector((state: RootState) => state.course);
  useEffect(() => {
    // 첫 실행 시 검색결과가 있으면 지우기
    dispatch(resetSearchCourses());
    dispatch(recommendCourse.request(userInfo.userId));
  }, []);
  return (
    <>
      <Nav />
      <Menu currentName="코스추천" />

      {keywordCourses.length > 0 ? (
        <Wrapper>
          <CourseWrapper>
            <SearchForm />
            <CourseBlock>
              {searchCourses.length > 0 && (
                <div>
                  <div className="title"> {searchKeyword} 관련 코스 추천</div>
                  <CourseSlider data={searchCourses} />
                </div>
              )}
              {userInfo.userName.length > 0 ? (
                <div className="title">
                  {userInfo.userName}님 맞춤 추천 코스
                </div>
              ) : (
                <div className="title">여행어때가 추천하는 여행 코스</div>
              )}
              {userCourses.length != 0 && <CourseSlider data={userCourses} />}
              {keywordCourses.map((keywordCourse: any, idx) => (
                <div key={idx}>
                  <div className="title">
                    {
                      KEYWORD.titles[
                        KEYWORD.keywords.indexOf(keywordCourse.title)
                      ]
                    }
                  </div>
                  <CourseSlider data={keywordCourse.contents} />
                </div>
              ))}
            </CourseBlock>
          </CourseWrapper>
        </Wrapper>
      ) : (
        <Loading />
      )}
      <Footer />
    </>
  );
};

export default CourseComp;