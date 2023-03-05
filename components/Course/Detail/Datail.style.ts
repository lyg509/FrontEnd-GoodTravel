import styled from 'styled-components';

const Header = styled.div`
  .detail-title {
    font-size: 35px;
    font-family: 'Jalnan';
  }
  .detail-title .back {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }
  .detail-state {
    margin-bottom: 10px;
    ul {
      display: flex;
      justify-content: right;
      li {
        border: 1px solid red;
        font-size: 18px;
      }
    }
  }
  .end {
    cursor: default;
  }
  @media ${props => props.theme.tablet} {
    .detail-title {
      font-size: 25px;
    }
    .detail-title .back {
      margin-right: 10px;
    }
  }
`;

const CourseMap = styled.div`
  height: 350px;
  @media ${props => props.theme.tablet} {
    height: 300px;
  }
  .customoverlay {
    position: relative;
    border-radius: 20px;
    float: left;
  }
  .customoverlay:nth-of-type(n) {
    position: relative;
    bottom: 55px;
    left: 3px;
    border-radius: 6px;
    border: 1px solid #ccc;
    float: left;
  }
  .customoverlay .title {
    display: block;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px 15px;
    font-size: 14px;
    font-weight: bold;
  }
  .customoverlay:after {
    content: '';
    position: absolute;
    margin-left: -12px;
    left: 50%;
    bottom: -12px;
    width: 22px;
    height: 12px;
    background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png');
    opacity: 0.5;
  }
`;

const CourseImage = styled.div`
  height: 350px;
  margin-left: 10px;
  .course-image {
    position: relative;
    img {
      height: 350px;
      width: 100%;
      object-fit: cover;
      border: 1px solid ${props => props.theme.colors.backgroundColor};
    }
  }
  .course-image-content {
    position: absolute;
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 10px;
    padding-bottom: 30px;
    bottom: 1px;
    left: 1px;
    right: 1px;
  }
  .course-image-content .name {
    font-size: 15px;
    font-weight: bold;
  }
`;

const CourseIndex = styled.div`
  margin: 20px;
  font-size: 20px;
  text-align: center;
`;

const Content = styled.div`
  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  font-size: 16px;
  padding: 20px;
  border-radius: 1vw;
  border: 1px solid lightgray;
  background-color: ${props => props.theme.colors.backgroundColor};
`;

const Review = styled.div`
  margin: 30px 0;
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  & > div {
    padding: 0px 20px;
    .slick-prev {
      width: 30px;
      height: 30px;
      background-image: url('/images/left_arrow.png');
      background-size: cover;
    }
    .slick-next {
      width: 30px;
      height: 30px;
      background-image: url('/images/right_arrow.png');
      background-size: cover;
    }
  }
`;
const ReviewCard = styled.div``;
const ReviewImage = styled.div`
  /* position: relative;
  img {
    height: 240px;
    width: 100%;
    object-fit: cover;
    border: 1px solid ${props => props.theme.colors.backgroundColor};
  }
  .email {
    display: inline-block;
    padding: 2px 6px;
    font-size: 12px;
    position: absolute;
    bottom: 1px;
    left: 1px;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
  } */
`;

const GraphBlock = styled.div`
  & > div {
    border-radius: 1vw;
    border: 1px solid lightgray;
    background-color: ${props => props.theme.colors.backgroundColor};
  }
  margin: 20px 0;
  display: flex;
  width: 100%;
`;
const GraphPercentage = styled.div`
  height: 200px;
  width: 35%;
  margin-right: 20px;
  text-align: center;
  font-size: 20px;
  display: flex;
`;

const GraphPie = styled.div`
  height: 200px;
  width: 65%;
  @media ${props => props.theme.laptopS} {
  }
`;
const CourseDetail = styled.div`
  /* display: flex;
  justify-content: center;
  flex-direction: row; */
`;
const TagBlock = styled.div`
  padding: 0 10px;
  .tag {
    font-size: 15px;
    padding: 4px 10px;
    margin-bottom: 5px;
  }
`;

export {
  Header,
  CourseDetail,
  CourseMap,
  CourseImage,
  CourseIndex,
  Content,
  GraphBlock,
  GraphPercentage,
  GraphPie,
  Review,
  ReviewImage,
  ReviewCard,
  TagBlock,
};