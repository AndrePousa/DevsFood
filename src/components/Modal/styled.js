import styled from 'styled-components';

export const Container = styled.div`
  position:fixed;
  left:0;
  right:0;
  top:0;
  bottom:0;
  background-color:rgba(0,0,0,0.7);
  z-index:900;
  display:${props => props.status ? 'flex' : 'none'};
  justify-content:center;
  align-items:center;
`;

//terá um tamanho que varia de acordo com seu conteúdo.
export const ModalBody = styled.div`
  background-color:#fff;
  border-radius:20px;
  box-shadow:0px 0px 50px #000;
  max-height:95vh;
  max-width:100vw;
  overflow:auto;  //barra de rolagem se precisar
`;