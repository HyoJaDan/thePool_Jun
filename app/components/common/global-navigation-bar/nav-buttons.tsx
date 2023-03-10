import { NavLink } from '@remix-run/react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import type { FCClass } from '../types/function-component';

interface IPages {
  title: string;
  link: string;
}
export const NavButtons: FCClass = ({ className }) => {
  const pages: IPages[] = [
    { title: '트레이닝', link: '/' },
    { title: '마이페이지', link: 'my-page/profile' },
  ];

  const [URL, setURL] = useState<String>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    let [, , , temp] = window.location.href.split('/');
    if (temp === 'solution') temp = '';
    setURL(temp);
  });

  const links = pages.map(({ title, link }, index) => {
    const id = `${link}_${index}`;
    const [temp] = link.split('/');

    return (
      <Link istrue={URL === temp} key={id} to={link} end>
        {title}
      </Link>
    );
  });

  return (
    <Wrapper className='body1_BD'>
      {links}
      <Body2SB className='body2_SB'>더풀 사용법</Body2SB>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 28px;
  color: ${(prop) => prop.theme.color.basic.white};
`;
const Body2SB = styled.div`
  color: #959290;
  padding-left: 28px;
  border-left: 1px solid ${(prop) => prop.theme.color.grayScale.gray_600};
  cursor: pointer;
`;
const Link = styled(NavLink)<{ istrue: boolean }>`
  color: #a4a2a0;
  ${({ istrue }) => istrue && `color:#31302F`}
`;
