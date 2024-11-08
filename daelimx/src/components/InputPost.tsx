// 나의 게시글을 작성, 게시글을 업로드

import { useRef, useState } from "react";
import styled from "styled-components";
import { auth, firestore } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const Form = styled.form`
  display: flex;
  gap: 10px;
  border: 1px solid #353535;
  padding: 20px 10px;
`;
const ProfileArea = styled.div`
  background-color: tomato;
  width: 50px;
  height: 50pxzoomit;
`;
const PostArea = styled.div`
  flex: 1;
`;
const TextArea = styled.textarea`
  resize: none;
  background-color: black;
  color: white;
  width: 100%;
  font-weight: bold;
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
  justify-content: space-between;
  margin-top: 15px;
`;
const AttachPhotoButton = styled.label`
  padding: 5px 20px;
  background-color: #1379ff;
  color: white;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  &:hover,
  ::after {
    opacity: 0.8;
  }
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
  // Page logic process
  // TextArea Reference 참조 Hook
  const textAreaFef = useRef<HTMLTextAreaElement>(null);

  // 내가 쓴 게시글 내용 text
  const [post, setPost] = useState<string>("");
  // 내가 업로드한 이미지 File
  const [file, setFile] = useState<File>();
  // 업로드 로딩
  const [loading, setLoading] = useState<boolean>(false);

  // 1. 작성한 게시글 텍스트 State에 저장
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // 1. 작성 event에서 value(text)값을 알아온다.
    const value = e.target.value;
    // 2. value 값을 state(post)에 저장한다.
    setPost(value);
    // 3. state(post)에 저장된 값을 화면에 출력한다.
    // ㄴ <TextArea/>에서 value={}과 연결

    // 4. ref를 통해서, 자동 높이 조절
    // 4-a. ref 안에 값이 잘 들어갔는 지 확인
    if (textAreaFef && textAreaFef.current) {
      // 4-b. 높이 초기화
      textAreaFef.current.style.height = "auto";
      // 4-c. 스크롤 높이 만큼 Textarea 높이를 조절
      textAreaFef.current.style.height = `${textAreaFef.current.scrollHeight}px`;
    }
  };
  // 2. 업로드한 이미지를 State에 저장
  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 1. event에서 첨부한 이미지 파일을 가져온다.
    const files = e.target.files;
    // +방어코드 : 첨부된 파일이 존재하는지 + 첨부파일이 1개인경우
    if (files && files?.length === 1) {
      // 2. 가져온 이미지를 state(file)에 저장한다.
      const imageFile = files[0];
      setFile(imageFile);
      // 3. state(file)에 저장된 이미지 미리보기.
    }
  };
  // 3. SErver(Firebase)에 최종 제출
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // 제출 시 화면 새로고침 방지
    e.preventDefault();
    // !! 로딩 시작 !!
    setLoading(true);

    try {
      // 0. Firebase 세팅
      // 1. 제출 정보 (test,photo,user)
      const user = auth.currentUser;
      // 1-b. [방어코드] : 제출정보를 기반으로 조건에 맞지 않으먄 종료시킴
      if (user == null || post === "" || loading) {
        return;
      }
      // ---로딩 시작 ---
      // 2. Firebase에 특정 위치에 제출
      // ㄴ user의 Nickname
      // ㄴ user의 id값
      // ㄴ 포스트 작성 시간
      // ㄴ 작성한 Text
      // ㄴ 첨부한 Photo
      const myPost = {
        nickname: user.displayName,
        userId: user.uid,
        createdAt: Date.now(),
        post: post,
      };
      // 2-1. firestore DB에 myPost 업로드
      const path = collection(firestore, "posts");
      await addDoc(path, myPost);
      // 2-2.storage에 photo 업로드
      // -- 잠시 생략 --
    } catch (e) {
      // ---에러 예외 처리---
      console.warn(e);
    } finally {
      // ---Loading 종료---
      setLoading(false);
    }
  };

  // Page design Redering
  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      <ProfileArea></ProfileArea>
      <PostArea>
        <TextArea
          rows={1}
          ref={textAreaFef}
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
          <SubmitButton type="submit" value={loading ? "제출중" : "제출하기"} />
        </BottomMenu>
      </PostArea>
    </Form>
  );
};
