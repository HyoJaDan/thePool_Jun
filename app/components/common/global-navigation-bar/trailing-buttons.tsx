import { Link } from '@remix-run/react';
import type { FC } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  loginInformation,
  loginStatus,
} from '~/recoils/user/login-information';

type IType = {
  isloggedin: boolean | undefined | 'shutDown';
  setlogin: Function;
};
const Login = ({ isloggedin, setlogin }: IType) => {
  const onClick = () => {
    setlogin(false);
  };
  if (isloggedin === true) {
    return <CircleLink />;
  }
  return <TextLink onClick={onClick}>로그인</TextLink>;
};
type TrailingButtonMenu = {
  src: string;
  to: string;
};

const menu: TrailingButtonMenu[] = [
  {
    to: '/',
    src: '/icons/notification.svg',
  },
];

export const TrailingButtons: FC = () => {
  const loginInfo = useRecoilValue(loginInformation);
  const setStatus = useSetRecoilState(loginStatus);
  const menuButtons = menu.map(({ src, to }) => {
    return (
      <IconLink to={to} key={`menu-icon-buttons-${src}`}>
        <Icon src={src} />
      </IconLink>
    );
  });
  return (
    <Wrapper>
      {menuButtons}
      <Login isloggedin={loginInfo.loginStatus} setlogin={setStatus} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const IconLink = styled(Link)`
  display: block;
`;
const TextLink = styled.div`
  font-family: 'Noto Sans';
  font-weight: 300;
  font-size: 16px;
  line-height: 100%;
  cursor: pointer;
  color: ${(prop) => prop.theme.color.basic.black};
`;
const CircleLink = styled.div`
  display: grid;
  place-content: center;
  width: 32px;
  height: 32px;
  background-color: #c2c0bd;
  clip-path: circle(50%);
  cursor: pointer;
`;
const Icon = styled.img.attrs({
  role: 'button',
})`
  display: block;
  width: 24px;
  height: 24px;
  color: #c2c0bd;
`;
