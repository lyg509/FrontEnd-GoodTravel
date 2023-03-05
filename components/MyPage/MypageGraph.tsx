import { NextPage } from 'next';
import {
  MypageWrapper,
  GraphBlock,
  Title,
  SubTitle,
  GraphWrapper,
} from './Mypage.style';
import MypageChart from '../Charts/MypageChart';
import PieChart from '../Charts/PieChart';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { TEST } from '../../assets/test';
import { MainStamp } from '../Main';

const MypageGraph: NextPage = () => {
  const { userInfo } = useSelector((state: RootState) => state.user);
  const { tourId } = useSelector((state: RootState) => state.record);
  return (
    <>
      {userInfo.tourTestId == 7 ? (
        <Title>반갑습니다 {userInfo.userName}님.</Title>
      ) : (
        <>
          <SubTitle
            style={{ color: TEST.results[userInfo.tourTestId - 1].color }}
          >
            {TEST.results[userInfo.tourTestId - 1].title}
          </SubTitle>
          <Title>반갑습니다 {userInfo.userName}님.</Title>
        </>
      )}
      {tourId > 0 && <MainStamp />}
      <GraphWrapper>
        <div className="subTitle">개인 여행 분석</div>
        <GraphBlock>
          <div className="LGraph">
            <div>월별 여행 분석</div>
            <MypageChart />
          </div>
          <div className="RGraph">
            <div>지역 여행 분석</div>
            <PieChart />
          </div>
        </GraphBlock>
      </GraphWrapper>
    </>
  );
};

export default MypageGraph;