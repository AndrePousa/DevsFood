import React from 'react';
import { Header, Logo, SearchInput } from './styled';

export default () => {
  return(
    <Header>
      <Logo src="/assets/logo.png"/>
      <SearchInput type="text" placeholder="Digite aqui..."/>
    </Header>
  )

}