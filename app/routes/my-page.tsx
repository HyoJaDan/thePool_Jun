import { Outlet } from '@remix-run/react';
import { AnimatePresence, useScroll } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import MyPagePart from '~/components/myPage/myPage-common';
import OutputOverlay from '~/components/myPage/outputOverlay';
import { clickSetting } from '~/recoils/user-info/atoms';

export default function DefaultMyPage() {
  const clicked = useRecoilValue(clickSetting);
  const { scrollY } = useScroll();
  return (
    <Wrapper>
      <MyPagePart />
      <Outlet />
      <AnimatePresence>
        {clicked.skill ? (
          <OutputOverlay clickedOverlay='skill' scroll={scrollY.get()} />
        ) : null}
        {clicked.interest ? (
          <OutputOverlay clickedOverlay='interest' scroll={scrollY.get()} />
        ) : null}
        {clicked.tag ? (
          <OutputOverlay clickedOverlay='tag' scroll={scrollY.get()} />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  padding: 95px 0px;
  background-color: #d5d5d5;
`;