import styled from 'styled-components';

const MypageWrapper = styled.div<{ height: string }>`
  margin: 20px 0px;
  width: 100%;
  height: ${props => props.height};
  background-color: ${props => props.theme.colors.backgroundColor};
  border-radius: 1vw;
  .subTitle {
    height: 10px;
    padding: 15px;
    font-size: 20px;
    font-family: 'Jalnan';
  }
  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }
  .react-horizontal-scrolling-menu--scroll-container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  @media ${props => props.theme.mobile} {
    height: auto;
  }
`;

const GraphWrapper = styled.div`
  margin: 20px 0px;
  width: 100%;
  height: 400px;
  background-color: ${props => props.theme.colors.backgroundColor};
  border-radius: 1vw;
  @media ${props => props.theme.mobile} {
    height: 650px;
  }
  .subTitle {
    height: 10px;
    padding: 15px;
    font-size: 20px;
    font-family: 'Jalnan';
  }
`;

const GraphBlock = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  .LGraph {
    border-radius: 1vw;
    width: 48%;
    height: 77%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    div {
      font-family: 'Jalnan';
    }
  }
  .RGraph {
    border-radius: 1vw;
    width: 48%;
    height: 77%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    div {
      font-family: 'Jalnan';
    }
  }
  @media ${props => props.theme.mobile} {
    flex-direction: column;
    .LGraph {
      border-radius: 1vw;
      width: 360px;
      height: 250px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      margin-bottom: 15px;
      div {
        font-family: 'Jalnan';
      }
    }
    .RGraph {
      border-radius: 1vw;
      width: 360px;
      height: 250px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      div {
        font-family: 'Jalnan';
        margin-bottom: 15px;
      }
    }
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-family: 'Jalnan';
  @media ${props => props.theme.mobile} {
    font-size: 25px;
  }
`;
const SubTitle = styled.div`
  font-size: 20px;
  font-family: 'Jalnan';
  @media ${props => props.theme.mobile} {
    font-size: 15px;
  }
`;

const CourseWrapper = styled.div`
  margin: 20px 0px;
  width: 100%;
  height: 280px;
  background-color: ${props => props.theme.colors.backgroundColor};
  border-radius: 1vw;
  @media ${props => props.theme.mobile} {
    height: 230px;
  }
  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }
  .react-horizontal-scrolling-menu--scroll-container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .subTitle {
    height: 10px;
    padding: 15px;
    font-size: 20px;
    font-family: 'Jalnan';
  }
`;

const MyTravleWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 95%;
  .map {
    border-radius: 1vw;
    width: 48%;
    height: 90%;
    background-color: white;
  }
  .diary {
    border-radius: 1vw;
    width: 48%;
    height: 90%;
    background-color: white;
  }
  @media ${props => props.theme.mobile} {
    flex-direction: column;
    .map {
      margin: 20px 0;
      border-radius: 1vw;
      width: 80%;
      height: 300px;
      background-color: white;
    }
    .diary {
      border-radius: 1vw;
      width: 80%;
      height: 90%;
      background-color: ${props => props.theme.colors.backgroundColor};
    }
    margin-bottom: 20px;
  }
`;

const DiaryWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 10px;
  #title {
    height: 10%;
    font-family: 'Jalnan';
    margin: 10px;
  }
  #noRecord {
    text-align: center;
    font-family: 'Jalnan';
    font-size: large;
    padding-bottom: 20px;
  }
  #image {
    height: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  #content {
    height: 40%;
    margin: 10px;
    text-decoration: underline;
    text-underline-position: under;
    word-break: break-all; // 글자 넘어가면 줄바꿈
    overflow: auto;
  }
  @media ${props => props.theme.mobile} {
    #title {
      height: 10%;
      font-family: 'Jalnan';
      margin: 10px;
    }
    #noRecord {
      text-align: center;
      font-family: 'Jalnan';
      font-size: small;
    }
    #image {
      height: 50%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    #content {
      height: 40%;
      margin: 10px;
      text-decoration: underline;
      text-underline-position: under;
    }
  }
`;

export {
  MypageWrapper,
  GraphWrapper,
  GraphBlock,
  SubTitle,
  Title,
  MyTravleWrapper,
  DiaryWrapper,
  CourseWrapper,
};