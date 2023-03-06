import Router from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { StampBlock, StampCard } from './Main.style';

export default function MainStamp() {
  const { stamps } = useSelector((state: RootState) => state.record);
  const clickStampBlock = () => {
    Router.push('/record');
  };
  return (
    <StampBlock onClick={clickStampBlock}>
      <div className="stamp-title">🛫 현재 여행중인 코스 </div>
      <div className="stamp-line" />
      <div className="stamp-content">
        {stamps.map(data => (
          <StampCard key={data.touristIndex} $state={data.state}>
            <div>
              <img src={data.image} />
              <img src="/images/clear.png" className="stamp" />
            </div>
            <div className="stamp-name">
              <div className="stamp-index">{data.touristIndex}</div>{' '}
              {data.touristName}
            </div>
          </StampCard>
        ))}
      </div>
    </StampBlock>
  );
}