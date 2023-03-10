import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  MyTravleWrapper,
  DiaryWrapper,
  MypageReview,
  DiaryBlock,
} from './Mypage.style';
import MypageMap from './MypageMap';

const MypageTravelRecord: NextPage = () => {
  const { userVisitCourses, selectRecord } = useSelector(
    (state: RootState) => state.user,
  );
  const nowCourse = userVisitCourses.filter(
    data => data.courseId == selectRecord,
  );
  const changeDate = (word: string) => {
    const date = word.split('-');
    const year = date[0];
    const month = date[1][0] === '0' ? date[1][1] : date[1];
    const day = date[2][0] === '0' ? date[2][1] : date[2];

    return `${year}λ ${month}μ ${day}μΌ`;
  };
  return (
    <MypageReview>
      <div className="subTitle">π μ¬ν κΈ°λ‘</div>
      <MyTravleWrapper>
        <div className="map">
          <MypageMap />
        </div>
        <div className="diary">
          {nowCourse.length != 0 ? (
            <DiaryBlock>
              <div className="diary-card">
                <div className="review-image">
                  <img src={nowCourse[0].image} />
                </div>
                <div className="review-date">
                  {changeDate(nowCourse[0].recordRegDt)}
                </div>
                <div className="review-name">{nowCourse[0].courseName}</div>
                <div className="review-content">
                  {nowCourse[0].recordContent}
                </div>
              </div>
            </DiaryBlock>
          ) : (
            <DiaryWrapper>
              <div id="noRecord">
                λ°©λ¬Έν μ§μ­μ΄ μμ΅λλ€.π₯ <br />
                μ¬νμ μμν΄λ³΄μΈμ!
              </div>
            </DiaryWrapper>
          )}
        </div>
      </MyTravleWrapper>
    </MypageReview>
  );
};

export default MypageTravelRecord;