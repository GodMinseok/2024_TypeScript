// 나의 게시글을 작성, 게시글을 업로드

import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
`;
const ProfileArea = styled.div`
  background-color: tomato;
  width: 50px;
  height: 50px;
`;
const PostArea = styled.div`
  background-color: yellowgreen;
`;
const TextArea = styled.textarea`
  resize: none;
  background-color: black;
  color: white;
  width: 100%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border: none;
  &:focus {
    outline-color: #38a5ff;
    forced-color-adjust: 38a5ff;
  }
`;
const BottomMenu = styled.div`
  display: flex;
`;
const AttachPhotoButton = styled.label`
  padding: 5px 20px;
  background-color: #1379ff;
  color: white;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`;
const AttachPhotoInput = styled.input`
  display: none;
`;
const SubmitButton = styled.input`
  padding: 5px 20px;
  border-radius: 20px;
  border: none;
  background-color: #1379ff;
  color: white;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  &:hover,
  ::after {
    opacity: 0.8;
  }
`;

export default () => {
  // Page Logic Process
  // 내가 쓴 게시글 내용 Text
  // 내가 업로드한 이미지 File
  const [post, setPost] = useState<string>("");
  // 내가 업로드한 이미지 File
  const [file, setFile] = useState<File>();

  // 1. 작성한 게시글 텍스트 State에 저장
  const onChange = () => {};
  // 2. 업로드한 이미지를 State에 저장
  const onChangeFile = () => {};
  // 3. Server(Firebase)에 최종 제출
  const onSubmit = () => {};

  return (
    <Form>
      <ProfileArea></ProfileArea>
      <PostArea>
        <TextArea placeholder="무슨 일이 일어났나요?"></TextArea>
        <BottomMenu>
          <AttachPhotoButton htmlFor="photo">사진 업로드</AttachPhotoButton>
          <AttachPhotoInput id="photo" type="file" accept="image/*" />
          <SubmitButton type="submit" />
        </BottomMenu>
      </PostArea>
    </Form>
  );
};
