import type { NextPage } from 'next';
import { Wrapper } from './Footer.style';

const Footer: NextPage = () => {
  return (
    <Wrapper>
      <div>Copyright ⓒ 여행어때 Corp. All rights reserved</div>
      <div>주소 : 성남시 수정구 태평동</div>
      <div>email : 여행어때@naver.com</div>
    </Wrapper>
  );
};

export default Footer;