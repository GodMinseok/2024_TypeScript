// 불러온 게시글을 화면에 예쁘게 보여줍니다.
// - 불러온 게시글 정보(property)를 받아와야합니다.
// - 불러온 게시글 정보(property)가 어떤 타입인 지 알아야합니다.

import styled from "styled-components";
import { Ipost } from "../types/post-type";
import { auth, firestore } from "../firebaseConfig";
import moment from "moment";
import Item from "./Post-ItemMenu";
import { deleteDoc, doc } from "firebase/firestore";

const Container = styled.div`
  border: 1px solid #353535;
  padding: 10px 15px;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 5px;
`;
const ProfileArea = styled.div``;
const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
const UserInfo = styled.div`
  display: flex;
  gap: 5px;
  align-items: flex-end;
`;
const UserEmail = styled.div`
  font-size: 10px;
  color: #454ed1;
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

const Footer = styled.div`
  display: flex;
  gap: 8px;
  margin: 10px 0px;
`;

const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DeleteBtn = styled.button`
  cursor: pointer;
  font-size: 10px;
`;

// 기본 프로필 이미지
const defaultProfileImg =
  "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg";

export default ({ id, userId, createdAt, nickname, post, photoUrl }: Ipost) => {
  // Logic
  // 로그인 유저 정보
  const user = auth.currentUser;

  // 게시글 삭제
  const onDelete = async () => {
    const isOk = window.confirm("삭제하시겠습니까?");

    try {
      if (isOk) {
        // Firebase로부터 해당 게시글 삭제
        // 1. 내가 작성한 게시글인가? (로그인 유저ID, )
        // ㄴ1-a. 내가 작성 X => 삭제하면 안됨
        if (user?.uid !== userId) {
          return;
        }

        // 2. 특정 게시글 ID를 통해 Firebase에서 doc삭제
        // 2-1. 특정 id 값을 가진 doc를 collection안에서 찾는
        const removeDoc = await doc(firestore, "posts", id);

        // 2-2. 찾은 doc을 collection안에서 삭제한다.
        await deleteDoc(removeDoc);
      }
    } catch (e) {
      console.error("post delete error : ", e);
    }
  };

  // Page Design
  return (
    <Container>
      <Wrapper>
        <ProfileArea>
          <ProfileImg src={photoUrl || defaultProfileImg} />
        </ProfileArea>
        <Content>
          <Topbar>
            <UserInfo>
              <UserName>{nickname}</UserName>
              {auth.currentUser && (
                <UserEmail>{auth.currentUser.email}</UserEmail>
              )}
            </UserInfo>
            {/* 내가 작성한 게시글에서만 삭제버튼 나타남 */}
            {user?.uid === userId && (
              <DeleteBtn onClick={onDelete}>삭제</DeleteBtn>
            )}
          </Topbar>
          <PostText>{post}</PostText>
          <CreateTime>{moment(createdAt).fromNow()}</CreateTime>
        </Content>
      </Wrapper>
      <Footer>
        <Item type="like" num={83} />
        <Item type="view" num={2383} />
        <Item type="comment" num={12} />
      </Footer>
    </Container>
  );
};
