import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas: 
  "brand header" //todo BRAND É O COLUM 250px | HEADER É O COMLUM AUTO.
  "menu search" // * MENU É O ROWS 105PX | SEARCH É O 128PX
  "menu content" // ? MENU É O ROWS 128PX | CONTENT É O AUTO 
  "newnote content"; // ! NEW NOTE É O 64px | CONTENT É O AUTO 

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`
export const Brand = styled.div`
  grid-area: brand;
  background-color: red;

  border: solid 6px black;
`
export const Menu = styled.ul`
  grid-area: menu;
  background-color: green;
  border: solid 6px yellow;
`
export const Search = styled.div`
  grid-area: search;
  background-color: violet;
  border: solid 6px green;
`
export const Content = styled.div`
  grid-area: content;
  background-color: blue;
  border: solid red 6px;
`
export const NewNote = styled.button`
  grid-area: newnote;
  background-color: yellow;
  border: solid blue 6px;
`