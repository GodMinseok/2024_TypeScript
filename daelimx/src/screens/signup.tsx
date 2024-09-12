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

const Title = styled.h1``;
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

const SubTitle = styled.p``;

export default () => {
  return (
    <Container>
      <Title>Signup Page.</Title>
      <Form>
        <Input />
        <Input />
        <Input />
        <Input />
      </Form>
    </Container>
  );
};
