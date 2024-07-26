import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas: "brand header" //todo BRAND É O COLUM 250px | HEADER É O COMLUM AUTO.
    "menu search" // * MENU É O ROWS 105PX | SEARCH É O 128PX
    "menu content" // ? MENU É O ROWS 128PX | CONTENT É O AUTO
    "newnote content"; // ! NEW NOTE É O 64px | CONTENT É O AUTO

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;
export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ORANGE}
  }
`;
export const Menu = styled.ul`
  grid-area: menu;
  padding-top: 64px;
  text-align: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  > li {
    margin-bottom: 24px;
  }
`;
export const Search = styled.div`
  grid-area: search;
  padding: 64px 64px 0;
`;
export const Content = styled.div`
  grid-area: content;
`;
export const NewNote = styled.button`
  grid-area: newnote;
`;
