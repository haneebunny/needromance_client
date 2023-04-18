import * as S from "./../MyPageProfile.style";
import { IMyPageProps } from "../../../MyPage.type";

const MyPageProfileDetail = ({ setIsEdit }: IMyPageProps) => {
  return (
    <S.ProfileWrap>
      <S.Row>
        <S.ListWrap>
          <S.List>닉네임</S.List>
          <S.List>프로필사진</S.List>
          <S.List>이메일</S.List>
          <S.List>회원등급</S.List>
        </S.ListWrap>
        <S.ListWrap>
          <S.List>닉네임입니당</S.List>
          <S.ProfileImg src="./img/imgThumb.png" />
          <S.List>example.gmail.com</S.List>
          <S.List>골드</S.List>
        </S.ListWrap>
      </S.Row>
      <S.BtnWrap>
        <S.Btn onClick={() => setIsEdit(true)}>프로필 수정</S.Btn>
      </S.BtnWrap>
    </S.ProfileWrap>
  );
};

export default MyPageProfileDetail;
