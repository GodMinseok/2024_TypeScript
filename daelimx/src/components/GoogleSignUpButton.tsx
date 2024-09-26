import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebaseConfig";
import { FirebaseError } from "firebase/app";

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  background-color: #ffffff;
  color: black;
  padding: 5px 20px;
  border-radius: 15px;
  font-weight: 600;
  cursor: pointer;
`;
const Title = styled.p``;
const Icon = styled.img`
  width: 12px;
  height: 12px;
`;

export default () => {
  // navigate Hook (가장 상위에 있는 함수에만 만들어라)
  const navigation = useNavigate();

  // Google 로그인 함수(비동기형) .. with Server(Firebase)
  const onClick = async () => {
    try {
      // 1. provider 생성 (Google 로그인 제공자)
      const provider = new GoogleAuthProvider();

      // 2. Firebase 에게 provider & 로그인 정보를 전달
      await signInWithPopup(auth, provider);

      // 3. 로그인 성공, Home 페이지로 이동
      navigation("/");
    } catch (e) {
      //Firebase 에러인 경우, 알림창
      if (e instanceof FirebaseError) {
        alert(e.message);
      }
    }
  };

  return (
    <Button onClick={onClick}>
      <Icon src={`${process.env.PUBLIC_URL}/google-icon.png`} />
      <Title>Google 계정으로 가입하기</Title>
    </Button>
  );
};
