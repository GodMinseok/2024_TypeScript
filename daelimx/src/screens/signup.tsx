// Signup page를 구성

import { useState } from "react";
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
  font-weight: bold;
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
  &::plachoder {
    font-size: 10px;
  }
  &[type="submit"] {
    cursor: pointer;
    margin-top: 20px;
  }
`;

const SubTitle = styled.p`
  font-size: 9px;
`;

export default () => {
  // 회원 가입을 위한 Process 작성

  // A. 입력한 회원 정보를 저장(State) -- useState Hook
  const [nickName, setNickName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // B. 입력한 회원 정보를 가공/수정한다.
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 2. 입력한 정보(입력 값, 입력 위치)
    // const name = event.target.name; // 입력 위치
    // const value = event.target.value; // 입력 값
    const {
      target: { name, value },
    } = event;
    // 1. 입력한 정보를 분류(닉네임, 이메일, 비번)
    switch (name) {
      case "nickname":
        console.log("Name:", value);
        break;
      case "email":
        console.log("Email:", value);
        break;
      case "password":
        console.log("PW:", value);
        break;
    }
    // Goal: 각각 정보를 State(닉네임, 이메일, 비번) 저장
  };

  // C. 가입버튼을 누른 경우, 입력한 회원 정보를 SERVER에 전달 > 회원가입 처리
  const onSubmit = () => {};

  // Page Design Rndering (화면 디자인)
  return (
    <Container>
      <Title>회원 가입하기</Title>
      <Form>
        <SubTitle>이름*</SubTitle>
        <Input
          name="nickname"
          onChange={onChange}
          type="text"
          placeholder="예) Minseok"
        />
        <SubTitle>이메일*</SubTitle>
        <Input
          name="email"
          onChange={onChange}
          type="email"
          placeholder="에) Minseok@naver.com"
        />
        <SubTitle>비밀번호*</SubTitle>
        <Input
          name="password"
          onChange={onChange}
          type="password"
          placeholder="예) 6자리 이상 입력하세요."
        />
        <Input name="submit" type="submit" value={"가입하기"} />
      </Form>
    </Container>
  );
};
