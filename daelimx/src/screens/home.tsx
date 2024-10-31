// home page를 구성

import styled from "styled-components";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import InputPost from "../components/InputPost";

const Container = styled.div``;
const Title = styled.h1``;
export default () => {
  const navigate = useNavigate(); // 추가
  // 로그아웃 함수 feat.Server(firebase)
  const signOut = async () => {
    await auth.signOut();
    // try {
    //   await auth.signOut(); // Firebase 로그아웃 수행
    //   navigate("/signin"); // 로그아웃 후 signin 페이지로 이동
    // } catch (error) {
    //   console.error("로그아웃 실패:", error);
    //   alert("로그아웃에 실패했습니다.");
    // }
  };

  return (
    <Container>
      <Title>Home Page.</Title>
      <InputPost />
    </Container>
  );
};
