import styled from "styled-components";

export const MainContainer = styled.div`
 display: flex;
 box-sizing: border-box;
 flex-direction: column;
 width: 100%;
 height: 100%;
 align-items: center;
 padding: 1rem;
 background-color: aliceblue;
`;

export const ListContainer = styled.div`
display: grid;
grid-template-columns: 20% 40% 10% 15% 15%;
flex-wrap: wrap;
width: 100%;
box-sizing: border-box;
border: 1px black solid;
`

export const TagModal = styled.div`
overflow-y: scroll;
height: 50vh;
`

export const List = styled.ul`
padding-left: 10px;
flex-wrap: wrap;
display: flex;
width: 100%;
box-sizing: border-box;
`

export const Input = styled.input`
width: 70%;
height: 8%;
box-sizing: border-box;
`

export const UL = styled.ul`
padding: 1rem;
display: grid;
grid-template-columns: 20% 40% 15% 10% 10%;
box-sizing: border-box;
width: 100%;
border: 1px black solid;
justify-content: space-between;
list-style-type: none;
`
