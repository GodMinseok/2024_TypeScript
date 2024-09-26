import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  background-color: #1f92f7;
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

  // 회원 가입 페이지로 이동하는 함수
  const onClick = () => {
    navigation("/signup");
  };

  return (
    <Button onClick={onClick}>
      <Icon src={`${process.env.PUBLIC_URL}/email-icon.png`} />
      <Title>이메일로 가입하기</Title>
    </Button>
  );
};
