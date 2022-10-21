import styled from "styled-components"
import KakaoLogin from "~/components/KakaoLogin";
import GoogleLogin from "~/components/GoogleLogin";


export default function logIn() {
  
  return (
    <Wrapper>
      <Font>
        <Insert>
          <HW>
            THE POOL
          </HW>
          <LW>
            에 입장하기
          </LW>
        </Insert>
        <Ipsu>
          입수할 준비 되셨나요?
        </Ipsu>
        <Go>
<<<<<<< HEAD
          같은 분야의 주니어들과 함께 집단지성에 기대보아요.
<<<<<<< HEAD
=======
          같은 분야의 주니어들과 함께 집단지성에 기대보아요
>>>>>>> 88d8716 (feat logIn)
=======
>>>>>>> d525eee (featLogin3)
        </Go>
      </Font>
      <Login>
        <Apple>애플로 계속하기</Apple>
<<<<<<< HEAD
        <KakaoLogin />
        <GoogleLogin/>
=======
        <Kakao>카카오톡으로 계속하기</Kakao>
        <Google>구글로 계속하기</Google>
<<<<<<< HEAD
>>>>>>> 88d8716 (feat logIn)
=======
        <div id="g_id_onload"
         data-client_id="189399095236-k1thmc2f2r2ves3ueb1j2520cuqbdkaj.apps.googleusercontent.com"
         data-login_uri="the-pool-web-jun.vercel.app"
         data-auto_prompt="false" />
        <div className="g_id_signin"
         data-type="standard"
         data-size="large"
         data-theme="outline"
         data-text="sign_in_with"
         data-shape="rectangular"
         data-logo_alignment="left" />
>>>>>>> d525eee (featLogin3)
      </LogIn>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: absolute;
  width: 780px;
  height: 644px;
  background: #FFFFFF;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  font-family: 'Pretendard';
  font-style: normal;
  color: #000000;
  text-align: center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  `
const Font = styled.div``;

const Insert = styled.div`
  font-size: 36px;
  line-height: 2.3;
`;
const HW = styled.span`
  font-weight: 900;
`
const LW = styled.span`
  font-weight: 600;
`;
const Ipsu = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.9;
`;
const Go = styled.div`
  font-weight: 200;
  font-size: 20px;
  line-height: 1.6;
  margin-bottom:20px;
`;
const Login = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:16px;
  font-size:20px;
  line-height:24px;
  font-weight:700;
  cursor: pointer;
`;
const Apple = styled.div`
  width: 463px;
  height: 80px;

  background: #000000;
  color:white;
  border-radius: 15px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;
<<<<<<< HEAD
=======
const Kakao = styled.div`
  width: 463px;
  height: 80px;

  background: #FFE459;
  border-radius: 15px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;
const Google = styled.div`
  width: 463px;
  height: 80px;

  background: #EEEEEE;
  border-radius: 15px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

/* 

<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
 */

>>>>>>> 88d8716 (feat logIn)
