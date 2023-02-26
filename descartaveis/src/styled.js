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
grid-template-columns: 20% 40% 10% 10% 22%;
flex-wrap: wrap;
width: 100%;
box-sizing: border-box;
border: 1px black solid;
justify-content: center;
align-items: center;
`

export const TagModal = styled.dialog`
height: 80%;
width: 80%;
background-color: #ffeb3b;
`

export const ListMap = styled.div`
display: flex;
flex-direction: column;
margin-top: 6rem;
`

export const List = styled.ul`
padding-left: 10px;
flex-wrap: wrap;
display: flex;
width: 100%;
box-sizing: border-box;
`

export const Header = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
justify-content: center;
position: fixed;
top: 0;
background-color: #2196f3;
`
export const Input = styled.input`
width: 70%;
height: 8%;
box-sizing: border-box;
`

export const UL = styled.ul`
padding: 1rem;
display: grid;
grid-template-columns: 20% 35% 15% 8% 16%;
box-sizing: border-box;
width: 100%;
border: 1px black solid;
justify-content: space-between;
list-style-type: none;
`
export const DivCheked = styled.div`
background-color: ${(props) => 
props.status === "true" ? "blue" : "red"
};
display: flex;
justify-content: center;
align-items: center;
width: 25px;
height: 25px;
border-radius: 50%;
color: transparent;
`


export const DivModal = styled.div`
    display: ${(props) => props.open ? "flex" : "none"};
    position: fixed;
    top: 10rem;
    bottom: 0;
    height: 50%;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center; 
    `