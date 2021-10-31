import React from 'react';
import {CategoryImage, Container} from './styled';

export default ({data, activeCategory, setActiveCategory}) => {

  const handleCategoryClick = () => {
    setActiveCategory(data.id);
  }

  return(
    <Container
      active={activeCategory}
      id={data.id}
      onClick={handleCategoryClick}
      data-tip={data.name}
      data-for="tip-top"
    >
      <CategoryImage src={data.image}/>
    </Container>
  );
}