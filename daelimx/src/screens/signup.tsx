// Signup page를 구성

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import styled from "styled-components";
import { auth } from "../firebaseConfig";
import { FirebaseError } from "firebase/app";

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
// 회원가입 버튼 컴포넌트
const SignupBtn = styled.div`
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #2c6ee7;
  font-size: 10px;
  font-weight: 600;
  color: white;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-top: 20px;
`;

const ErrorMsg = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0px;
  color: tomato;
  font-weight: bold;
`;

export default () => {
  // 회원 가입을 위한 Process 작성

  // A. 입력한 회원 정보를 저장(State) -- useState Hook
  const [nickName, setNickName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

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
        setNickName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
    // Goal: 각각 정보를 State(닉네임, 이메일, 비번) 저장
  };

  // C. 가입버튼을 누른 경우, 입력한 회원 정보를 SERVER에 전달 > 회원가입 처리
  const onSubmit = async () => {
    console.log("가입하기 버튼 눌림");
    // A. 방어코드 -- ex) 입력을 안 한 경우..
    if (nickName === "" || email === "" || password === "") {
      alert("회원 정보를 모두 입력해주세요.");
    }

    // B. 회원가입 프로세스 진행
    try {
      // b-1. 로딩 start
      setLoading(true);

      // b-2. 회원 정보(닉네임, 이메일, 암호)를 모아서 서버(Firebase)에 전달(API)
      // 가입 완료 될 때 까지만 기다려 -> await - async와 세트로 사용됨
      const credential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // b-2-1. 유저의 닉네임 UPDate
      await updateProfile(credential.user, {
        displayName: nickName,
      });

      // b-3. 서버에서.. 가입 진행..
      // b-4. 가입완료> 1. 로그인 화면 or 2. 자동 로그인>home
    } catch (error) {
      // C. 예외적인 경우(Error) ..   중복 계정, 잘못된 정보
      // c-0. 만일 Firebase 관련 Error인 경우에만
      if (error instanceof FirebaseError) {
        // c-1. 에러 메세지 출력
        setError(error.code);
      }
    } finally {
    }

    // D. 로딩 exit..
    setLoading(false);
    // always 에러가 나든 안 나든 실행
  };

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
          value={nickName}
        />
        <SubTitle>이메일*</SubTitle>
        <Input
          name="email"
          onChange={onChange}
          type="email"
          placeholder="에) Minseok@naver.com"
          value={email}
        />
        <SubTitle>비밀번호*</SubTitle>
        <Input
          name="password"
          onChange={onChange}
          type="password"
          placeholder="예) 6자리 이상 입력하세요."
          value={password}
        />
        <SignupBtn onClick={loading ? undefined : onSubmit}>
          {1 + 2 == 2 ? "로딩 중..." : "가입하기"}
        </SignupBtn>
        <ErrorMsg>{errorMsgGroup[error]}</ErrorMsg>
      </Form>
    </Container>
  );
};

interface errorMsgGroupType {
  [key: string]: string;
}
// 1. 동일한 이메일
// 2. 비밀번호가 6자리 미만
// 3. 이메일, 비번 잘못 입력
const errorMsgGroup: errorMsgGroupType = {
  "auth/email-already-in-use": "이미 존재하는 계정입니다.",
  "auth/weak-password": "비밀번호를 6자리 이상 입력해주세요.",
  "auth/invalid-email": "잘못된 이메일 혹은 비밀번호입니다.",
};
// errorMsgGroup["auth/email-already-in-use"]
