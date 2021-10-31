import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { LinkArea, LinkIcon } from './styled';

export default ({title, icon, link}) => {

  const history =  useHistory();
  const location = useLocation();

  //compara com o link de destino
  let isActive = location.pathname == link;

  //o click original não aconteça
  //muda de componente, mas o link continua disponivel
  const handleLinkClick = (e) => {
    e.preventDefault();
    history.push( link ) 
  }
  return (
      //inserido o tooltip e recebendo o texto no data-tip
      <LinkArea data-tip={title} data-for="tip-right"  active={isActive} href={link} onClick={handleLinkClick}>
        <LinkIcon src={icon} /> 
      </LinkArea>
  );
}
