import styled from 'styled-components';

export const Container = styled.div `
display:flex;
height: 100vh;
`;

//menu lateral
export const Menu = styled.div `
display:flex;
justify-content:center;
align-items:center;
background-color: #136713;
width: 80px; 
flex-direction:column;
`; 

export const PageBody = styled.div `
display:flex;
background-color:#00980D;
background-image:url('/assets/bg.png');
flex:1;
overflow-y:auto; //scroll da area verde clara, só o body
`; 