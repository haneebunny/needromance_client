import { Icon_Delete, Icon_Edit } from "../../../../../commons/styles/icons";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import Search from "../../../../commons/search";
import { MyPageTitle } from "../MyPage.body.style";
import * as S from "./MyPageBoard.style";

// 나중에 지울부분... =============
const UserNickName = "연애빼고다잘해";
const DATA_Example = [
  {
    id: "게시물 고유ID",
    title: "고민상담 제목입니다....abcdefg",
    created: "2023.04.16",
    commentCount: 10,
  },
  {
    id: "게시물 고유ID",
    title: "고민상담 제목입니다....abcdefg",
    created: "2023.04.16",
    commentCount: 100,
  },
  {
    id: "게시물 고유ID",
    title: "고민상담 제목입니다....abcdefg",
    created: "2023.04.16",
    commentCount: 100,
  },
];
// ===============================

const MyPageBoard = () => {
  const { onClickMoveToPage } = useMoveToPage();
  const handleDeleteBoard = (boardId: string) => () => {
    console.log(boardId);
  };

  return (
    <>
      <MyPageTitle>"{UserNickName}"님의 이야기들</MyPageTitle>
      <Search />
      <S.Table>
        <S.Thead>
          <tr>
            <S.TH>No</S.TH>
            <S.TH>제목</S.TH>
            <S.TH>작성일</S.TH>
            <S.TH>댓글</S.TH>
            <S.TH>관리</S.TH>
          </tr>
        </S.Thead>
        <S.Tbody>
          {DATA_Example.map((data, idx) => (
            <S.TR key={data.id}>
              <S.TD>{String(DATA_Example.length - idx).padStart(2, "0")}</S.TD>
              <S.TD>{data.title}</S.TD>
              <S.TD>{data.created}</S.TD>
              <S.TD>{data.commentCount}</S.TD>
              <S.TD>
                <S.ControlsWrap>
                  <S.IconBox onClick={onClickMoveToPage(data.id)}>
                    <Icon_Edit />
                  </S.IconBox>
                  <S.IconBox>
                    <Icon_Delete onClick={handleDeleteBoard(data.id)} />
                  </S.IconBox>
                </S.ControlsWrap>
              </S.TD>
            </S.TR>
          ))}
        </S.Tbody>
      </S.Table>
    </>
  );
};

export default MyPageBoard;
