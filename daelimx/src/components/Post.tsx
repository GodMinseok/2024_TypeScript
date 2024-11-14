// 불러온 게시글을 화면에 예쁘게 보여줍니다.
// - 불러온 게시글 정보(property)를 받아와야합니다.
// - 불러온 게시글 정보(property)가 어떤 타입인 지 알아야합니다.

import styled from "styled-components";
import { Ipost } from "../types/post-type";

const Container = styled.div``;
const ProfileArea = styled.div``;
const Content = styled.div``;
const UserName = styled.div``;
const PostText = styled.div``;
const CreateTime = styled.div``;

export default ({ userId, createdAt, nickname, post }: Ipost) => {
  return (
    <Container>
      <ProfileArea>
        <Content>
          <UserName>{nickname}</UserName>
          <PostText>{post}</PostText>
          <CreateTime>{createdAt}</CreateTime>
        </Content>
      </ProfileArea>
    </Container>
  );
};
