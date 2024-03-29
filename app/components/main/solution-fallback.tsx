import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { numOfSolution } from '~/data/solution/get-solutions';

export const SolutionFallback = () => {
  const numOfSolutions = useRecoilValue(numOfSolution);
  const components = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < numOfSolutions; i++) {
    components.push(<Box key={i} />);
  }
  return <Wrapper>{components}</Wrapper>;
};
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 24px;
  max-width: 1256px;
  margin: 28px auto;
  padding-bottom: 40px;
`;
const Box = styled.div`
  width: 402px;
  height: 309px;
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid #efedea;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
`;
