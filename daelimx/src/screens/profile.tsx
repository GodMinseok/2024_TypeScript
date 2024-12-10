import { useEffect, useState } from "react";
import styled from "styled-components";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #2c2492;
  border-radius: 15px;
  width: 400px;
  max-width: 90%;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const ProfileHeader = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
  color: white;
  text-align: center;
`;

const ProfileInfo = styled.div`
  font-size: 18px;
  color: white;
  margin-bottom: 15px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const StyledButton = styled.button`
  background-color: #ff7e67;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e66e55;
  }
`;

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [displayName, setDisplayName] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
      setDisplayName(currentUser.displayName || "");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleUpdateProfile = async () => {
    if (!auth.currentUser) {
      console.error("사용자가 로그인되어 있지 않습니다.");
      return;
    }
    try {
      await updateProfile(auth.currentUser, { displayName });
      setIsEditing(false); // 프로필 수정 완료 후 수정 상태를 false로 변경
      alert("프로필 수정이 완료되었습니다.");
      navigate("/profile");
    } catch (error) {
      console.error("프로필 업데이트 실패:", error);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <ProfileContainer>
      <ProfileHeader>{isEditing ? "프로필 수정" : "프로필 정보"}</ProfileHeader>
      {isEditing ? (
        <>
          <Input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="이름을 입력하세요"
          />
          <StyledButton onClick={handleUpdateProfile}>프로필 저장</StyledButton>
        </>
      ) : (
        <>
          <ProfileInfo>이름: {user.displayName}</ProfileInfo>
          <ProfileInfo>이메일: {user.email}</ProfileInfo>
          <StyledButton onClick={() => setIsEditing(true)}>
            프로필 수정
          </StyledButton>
        </>
      )}
    </ProfileContainer>
  );
};

export default Profile;
