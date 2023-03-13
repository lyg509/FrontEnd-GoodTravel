import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Nav from '../../components/Nav/Nav';
import Menu from '../../components/Nav/Menu';
import { Wrapper } from '../../styles/variables';

import {
  DetailHeader,
  DetailCourse,
  DetailGraph,
  DetailReview,
} from '../../components/Detail';
import Footer from '../../components/Footer/Footer';
import { getCourseDetail } from '../../store/detail';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import MainManual from '../../components/Main/MainManual';

const Detail: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const { courseReview } = useSelector((state: RootState) => state.detail);

  useEffect(() => {
    if (id) {
      dispatch(getCourseDetail.request(+id));
    }
  }, [id]);

  return (
    <>
      <Nav />
      <Menu currentName="상세보기" />
      <Wrapper>
        <DetailHeader />
        <DetailCourse />
        {courseReview.length > 0 && (
          <>
            <DetailGraph />
            <DetailReview />
          </>
        )}
      </Wrapper>
      <Footer />
      <MainManual />
    </>
  );
};

export default Detail;