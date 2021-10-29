import styled from 'styled-components';

export const Header = styled.div`
  background-color:#136713;
  border-radius:10px;
  padding:20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

export const Logo = styled.img`
  width:auto;
  height:70px;

`;

//Campo de procurar
export const SearchInput = styled.input`
  border:0;
  border-radius: 25px;
  width:${props => props.active ? 300 : 0  }px;
  height:50px;
  background-color:#fff;
  outline:0;  //não indica o campo 
  background-image:url('/assets/search.png');
  background-size:30px;
  background-repeat: no-repeat; //não repete a imagem
  background-position:10px center;
  padding-left:50px; //afastou o texto do icone
  transition:all ease 0.2s;
  cursor:pointer; //mãozinha
  font-size:15px;

  &:focus {
    cursor: text; //curso de texto
  }
`;