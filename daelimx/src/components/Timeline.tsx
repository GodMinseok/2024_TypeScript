// 업로드한 게시글을 최신순으로 받아와 보여줌

import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div``;

export default () => {
  // Page Login Process

  // 서버에서 게시글 받아오기
  const fetchPosts = async () => {
    // 1.
  };
  // 접속할 때마다, Timeline이 보여질 때 마다
  useEffect(() => {
    // 서버(Firebase)에서 최신 게시글들 받아오기
  }, []);

  // Page Design
  return <Container>TimeLine</Container>;
};
