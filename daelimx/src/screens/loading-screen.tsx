import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default () => {
  return <Container>loading...</Container>;
};
