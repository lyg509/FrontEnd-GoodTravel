import type { NextPage } from 'next';
import { Wrapper, ChatIcons } from './Footer.style';
import { AiFillMessage } from 'react-icons/ai';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { setModalState } from '../../store/chat';
import ChatApp from '../Chats/ChatApp';
const Footer: NextPage = () => {
  const dispatch = useDispatch();
  const { tourId } = useSelector((state: RootState) => state.record); // 여행중인지 체크(채팅)
  const showModal = () => {
    dispatch(setModalState(true));
  };
  return (
    <>
      {tourId != 0 && (
        <>
          <ChatIcons>
            <AiFillMessage onClick={showModal} />
          </ChatIcons>
          <ChatApp />
        </>
      )}

      <Wrapper>
        <div>Copyright ⓒ 여행어때 Corp. All rights reserved</div>
        <div>주소 : 성남시 수정구 태평동</div>
        <div>email : 여행어때@naver.com</div>
      </Wrapper>
    </>
  );
};

export default Footer;
