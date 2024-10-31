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
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);
    // 1. 작성 event에서 value(텍스트)값을 알아온다.
    const value = e.target.value;
    // 2. value 값을 state(post)에 저장한다.
    setPost(value);
    // 3. state(post)에 저장된 값을 화면에 출력한다.
    // ㄴ <TextArea/> 에서 value={}과 연결
  };
  // 2. 업로드한 이미지를 State에 저장
  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 1. event에서 첨부한 이미지파일을 가져온다.
    const files = e.target.files;
    // + 방어코드: 첨부파일이 존재하는지 + 첨부파일이 1개인 경우에만 2번 실행
    if (files && files.length === 1) {
      // 2. 가져온 이미지를 state(file)에 저장한다.
      const imageFile = files[0];
      setFile(imageFile);
      // 3. state(file)에 저장된 이미지 미리보기.
    }
  };
  // 3. Server(Firebase)에 최종 제출
  const onSubmit = () => {
    // 0. Firebase의 Setting
    // 1. 제출 정보(text, photo, user)
    // ---- Loading 시작 ----
    // 2. Firebase에 특정 위치에 제출
    // ㄴ user의 Nickname
    // ㄴ user의 id값
    // ㄴ 포스트 작성(생성) 시간
    // ㄴ 작성한 Text
    // ㄴ 첨부한 Photo
    // ---- Error 예외처리 ----
    // ---- Loading 종료 ----
  };

  return (
    <Form>
      <ProfileArea></ProfileArea>
      <PostArea>
        <TextArea
          value={post}
          onChange={(e) => onChange(e)}
          placeholder="무슨 일이 일어났나요?"
        ></TextArea>
        <BottomMenu>
          <AttachPhotoButton htmlFor="photo">
            {file ? "사진 추가됨" : "사진 업로드"}
          </AttachPhotoButton>
          <AttachPhotoInput
            onChange={(e) => onChangeFile(e)}
            id="photo"
            type="file"
            accept="image/*"
          />
          <SubmitButton onSubmit={() => onSubmit()} type="submit" />
        </BottomMenu>
      </PostArea>
    </Form>
  );
};
