import React,{ useState } from 'react';
import { Header, Logo, SearchInput } from './styled';

export default ({ search, onSearch }) => {
  
  const [inputActive, setInputActive] = useState(search == '' ? false : true );

  const handleInputFocus= () => {
    setInputActive(true);
  }

  const handleInputBlur = () => {
    if(search == ''){
      setInputActive(false)
    }
  }

  const handleChange = (e) => {
    onSearch( e.target.value); 
  }

  return(
    <Header>
      <Logo src="/assets/logo.png"/>
      <SearchInput
        type="text" 
        placeholder="Digite aqui..."
        value={search}
        onChange={handleChange} 
        active={inputActive}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Header>
  )
}