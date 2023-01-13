import styled from 'styled-components';

const CourseWrapper = styled.div`
  input {
    margin: 0;
    width: 100%;
    height: 50px;
    font-size: 15px;
    border: none;
    background-color: ${props => props.theme.colors.backgroundColor};
    border-radius: 1vw;
    padding-left: 15px;
    ::placeholder {
      font-size: 15px;
    }
  }
  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }
  .react-horizontal-scrolling-menu--scroll-container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .Coursestyle__CourseFormWrapper-sc-ozxrvz-4 {
    margin-top: 10px;
  }
`;

const CourseBlock = styled.div`
  .title {
    margin-top: 30px;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Jalnan';
  }
  .react-horizontal-scrolling-menu--scroll-container {
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #d2d0d0;
      border-radius: 10px;
      background-clip: padding-box;
      border: 5px solid transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: white;
      border-radius: 10px;
      box-shadow: inset 0px 0px 5px white;
    }
  }

  @media ${props => props.theme.mobile} {
    .title {
      font-size: 15px;
    }
  }
`;


// searchForm

const SearchFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    margin-left: 10px;
  }
`;

const Button = styled.button`
  font-size: 0.8vw;
  border: 0;
  height: 50px;
  width: 150px;
  border-radius: 1vw;
  background-color: ${props => props.theme.colors.pointColor};
  color: white;
  cursor: pointer;
  :hover {
  }
`;

//course Form
const CourseFormWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  margin-top: 30px;
  #space {
    padding-left: 5px;
    padding-right: 5px;
  }
  #card {
    cursor: pointer;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export {
  CourseWrapper,
  CourseBlock,
  SearchFormWrapper,
  Button,
  CourseFormWrapper,
};