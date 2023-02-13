import styled from 'styled-components';

const DetailHeader = styled.div`
  ul li {
    float: right;
    margin-left: 30px;
    font-size: 25px;
    cursor: pointer;
  }
  padding-bottom: 60px;
`;

const Title = styled.div`
  .back {
    display: flex;
    margin: 10px 30px;
  }
  font-size: 35px;
  display: flex;
`;

const CourseMap = styled.div`
  height: 350px;
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
    }
  }
  .course-image-content {
    position: absolute;
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 10px;
    padding-bottom: 30px;
    bottom: 0%;
    width: 100%;
  }
  .course-image-content .name {
    font-size: 15px;
    font-weight: bold;
  }
`;

const CourseIndex = styled.div`
  /* border: 1px solid red; */
  margin: 20px;
  font-size: 20px;
  text-align: center;
`;

const Content = styled.div`
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .graph {
  }
  .new {
    height: 150px;
    text-align: center;
    font-size: 20px;
  }
  font-size: 15px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 1vw;
  background-color: ${props => props.theme.colors.backgroundColor};
`;

const Review = styled.div`
  margin: 30px 0;
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .content {
    padding: 10px 30px;
    .slick-prev {
      width: 30px;
      height: 30px;
      color: black;
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
const ReviewImage = styled.div`
  position: relative;
  img {
    height: 240px;
    width: 100%;
    object-fit: cover;
  }
  .email {
    display: inline-block;
    padding: 2px 6px;
    font-size: 12px;
    position: absolute;
    bottom: 0;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
const ReviewCard = styled.div`
  padding: 0 10px;
`;

export {
  DetailHeader,
  Title,
  CourseMap,
  CourseImage,
  CourseIndex,
  Content,
  Review,
  ReviewImage,
  ReviewCard,
};