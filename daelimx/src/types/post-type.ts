/** 작성 게시글 타입 */
export type Ipost = {
  post: string;
  nickname: string;
  userId: string;
  createdAt: number;
  photoUrl?: string;
};
