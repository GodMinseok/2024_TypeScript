// 게시글 정보로부터 특정 아이콘 메뉴들을 표시
// - 댓글 수, 조회수, 좋아요 수

import styled from "styled-components";

const ItemBox = styled.div``;
const ItemIcon = styled.span``;
const ItemText = styled.span``;

type ItemIcon = "like" | "view" | "comment";
type IItem = { type: string; num: number };

const Item = ({ type, num }: IItem) => {
  return (
    <ItemBox>
      <ItemIcon />
      <ItemText>100</ItemText>
    </ItemBox>
  );
};

export default Item;
