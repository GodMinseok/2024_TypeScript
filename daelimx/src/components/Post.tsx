// 불러온 게시글을 화면에 예쁘게 보여줍니다.
// - 불러온 게시글 정보(property)를 받아와야합니다.
// - 불러온 게시글 정보(property)가 어떤 타입인 지 알아야합니다.

import styled from "styled-components";
import { Ipost } from "../types/post-type";
import { auth } from "../firebaseConfig";
import moment from "moment";

const Container = styled.div`
  border: 1px solid #353535;
  padding: 10px 15px;
`;
const ProfileArea = styled.div``;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const UserInfo = styled.div`
  display: flex;
  gap: 5px;
  align-items: flex-end;
`;
const UserEmail = styled.div`
  font-size: 10px;
  color: #545454;
`;

const UserName = styled.div`
  font-weight: 700;
  font-size: 13px;
`;
const PostText = styled.div`
  font-size: 17px;
`;
const CreateTime = styled.div`
  font-size: 11px;
  color: #575757;
`;

export default ({ userId, createdAt, nickname, post }: Ipost) => {
  return (
    <Container>
      <ProfileArea>
        <Content>
          <UserInfo>
            <UserName>{nickname}</UserName>
            {auth.currentUser && (
              <UserEmail>{auth.currentUser.email}</UserEmail>
            )}
          </UserInfo>
          <PostText>{post}</PostText>
          <CreateTime>{moment(createdAt).fromNow()}</CreateTime>
          <CreateTime>{createdAt}</CreateTime>
        </Content>
      </ProfileArea>
    </Container>
  );
};
