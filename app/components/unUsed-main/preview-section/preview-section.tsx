import styled from 'styled-components';
import type { FCChildren } from '~/components/common/types/function-component';

type PreviewSectionProps = {
  title: string;
  leadingContent?: JSX.Element;
};

export const PreviewSection: FCChildren<PreviewSectionProps> = ({
  title,
  children,
  leadingContent,
}) => (
  <Wrapper>
    <div className='title4_BD'>{title}</div>
    <ContentArea>
      {leadingContent}
      <ScrollWrapper>
        <PreviewList>{children}</PreviewList>
      </ScrollWrapper>
    </ContentArea>
  </Wrapper>
);

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: flex-start;
  color: #1f1f1f;
  overflow-x: hidden;
`;
const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const ScrollWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;
const PreviewList = styled.ul`
  display: grid;
  width: max(100%, 500px);
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
`;
