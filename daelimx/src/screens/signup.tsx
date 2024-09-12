// Signup page를 구성

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column; // 세로 배치
  align-items: center;
  width: 80%;
  max-width: 500px;
  padding: 30px;
`;

const Title = styled.h1`
  font-size: 25px;
`;
// 로고 이미지
// Text 입력 필드 구역
const Form = styled.form`
  margin-top: 30px;
  gap: 10px; // 칸 마다 간격
  display: flex;
  flex-direction: column;
`;

// Text 입력칸
const Input = styled.input`
  border-radius: 5px;
  border: none;
  padding: 5px 20px;
`;

const SubTitle = styled.p`
  font-size: 9px;
`;

export default () => {
  return (
    <Container>
      <Title>회원 가입하기</Title>
      <Form>
        <SubTitle>이름*</SubTitle>
        <Input />
        <SubTitle>이메일*</SubTitle>
        <Input />
        <SubTitle>비밀번호*</SubTitle>
        <Input />
        <Input />
      </Form>
    </Container>
  );
};
