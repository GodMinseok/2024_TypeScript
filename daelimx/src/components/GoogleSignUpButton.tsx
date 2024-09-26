import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebaseConfig";
import { FirebaseError } from "firebase/app";

const Button = styled.div`
  background-color: #ffffff;
  color: black;
  padding: 10px 20px;
  border-radius: 15px;
  font-weight: 600;
  cursor: pointer;
`;
const Title = styled.p``;

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
      <Title>Google 계정으로 가입하기</Title>
    </Button>
  );
};
