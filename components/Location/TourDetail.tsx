import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ImgaeListWrapper } from './Location.styled';

const TourDetail: NextPage = () => {
  const { searchLoactions, selectLocation } = useSelector(
    (state: RootState) => state.location,
  );
  let selectContent = '';
  const contents = searchLoactions.map(data => {
    if (selectLocation == data.touristName) {
      selectContent = data.touristSummary;
    }
  });
  console.log(contents);
  return (
    <>
      <ImgaeListWrapper height="200px">
        <div style={{ padding: '10px' }}>{selectContent}</div>
      </ImgaeListWrapper>
    </>
  );
};

export default TourDetail;