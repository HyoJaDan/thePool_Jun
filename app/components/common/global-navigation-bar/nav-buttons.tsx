import { Link } from '@remix-run/react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import type { FCClass } from '../types/function-component';

export const NavButtons: FCClass = ({ className }) => {
  const [isProblem, setIsProblem] = useState<boolean>(false);
  const [isSolution, setIsSolution] = useState<boolean>(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const [, , , temp] = window.location.href.split('/');
    if (temp === 'solution') {
      setIsProblem(false);
      setIsSolution(true);
    } else if (temp === 'my-page') {
      setIsProblem(false);
      setIsSolution(false);
    } else {
      setIsProblem(true);
      setIsSolution(false);
    }
  });

  return (
    <Wrapper className='body1_BD'>
      <LinkToProblem isProblem={isProblem} to='/'>
        문제
      </LinkToProblem>
      <LinkToSolution isSolution={isSolution} to='/solution'>
        풀이
      </LinkToSolution>
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
const LinkToProblem = styled(Link)<{ isProblem: boolean }>`
  color: #a4a2a0;
  ${({ isProblem }) => isProblem && `color:#31302F`}
`;
const LinkToSolution = styled(Link)<{ isSolution: boolean }>`
  color: #a4a2a0;
  ${({ isSolution }) => isSolution && `color:#31302F`}
`;
