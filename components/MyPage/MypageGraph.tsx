import { NextPage } from 'next';
import { MypageWrapper, GraphWrapper } from './Mypage.style';
import MypageChart from '../Charts/MypageChart';
import PieCHart from '../Charts/PieChart';
import {RootState} from '../../store';
import { useSelector } from 'react-redux';


const MypageGraph: NextPage = () => {
  const {userInfo} = useSelector((state: RootState)=> state.user);
  return (
    <>
      <MypageWrapper height="300px">
        <div className="subTitle">tourId: {userInfo.tourTestId} {userInfo.userName}님 반갑습니다.</div>
        <GraphWrapper>
          <div className="LGraph"></div>
            <MypageChart/>
          <div className="RGraph"></div>
            <PieCHart/>
        </GraphWrapper>
      </MypageWrapper>
    </>
  );
};

export default MypageGraph;