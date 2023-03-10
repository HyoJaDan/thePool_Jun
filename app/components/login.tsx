import { GoogleOAuthProvider } from '@react-oauth/google';
import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import GoogleLogin from '~/components/login/google';
import KakaoLogin from '~/components/login/kakao';
import { loginStatus } from '~/recoils/user/login-information';
import GithubLogin from './login/github';

export const loader: LoaderFunction = async () => {
  return [
    process.env.GOOGLE_CLIENT_ID,
    process.env.KAKAO_JS_API,
    process.env.GITHUB_CLIENT_ID,
    process.env.GITHUB_CLIENT_SECRET,
  ];
};

function Header() {
  return (
    <Font>
      <div className='title1_BD'>THE POOL에 입장하기</div>
      <Ipsu className='title4_BD'>입수할 준비 되셨나요?</Ipsu>
      <div className='body1_MD'>
        같은 분야의 주니어들과 함께 집단지성에 기대보아요.
      </div>
    </Font>
  );
}
export default function LoginComponent() {
  const GOOGLE_CLIENT_ID = useLoaderData()[0];
  const setType = useSetRecoilState(loginStatus);
  const onclick = () => {
    setType(undefined);
  };
  return (
    <Wrapper>
      <X src='/icons/X.svg' alt='X' onClick={onclick} />
      <Img src='/icons/bording.svg' alt='bording' />
      <Header />
      <Login className='body1_BD'>
        <GithubLogin />
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          <GoogleLogin />
        </GoogleOAuthProvider>
        <KakaoLogin />
      </Login>
    </Wrapper>
  );
}

const X = styled.img`
  position: absolute;
  top: 32.33px;
  right: 32.33px;
  cursor: pointer;
`;
const Wrapper = styled.div`
  padding-bottom: 64px;
  color: ${(prop) => prop.theme.color.basic.black};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const Img = styled.img`
  margin-top: 64px;
`;
const Font = styled.div`
  line-height: 120%;
  text-align: center;
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
`;

const Ipsu = styled.div`
  margin: 24px 0 8px 0;
`;

const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
