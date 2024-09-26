import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
  background-color: #1f92f7;
  padding: 10px 20px;
  border-radius: 15px;
  font-weight: 600;
  cursor: pointer;
`;
const Title = styled.p``;

export default () => {
  // navigate Hook (가장 상위에 있는 함수에만 만들어라)
  const navigation = useNavigate();

  // 회원 가입 페이지로 이동하는 함수
  const onClick = () => {
    navigation("/signup");
  };

  return (
    <Button onClick={onClick}>
      <Title>이메일로 가입하기</Title>
    </Button>
  );
};
