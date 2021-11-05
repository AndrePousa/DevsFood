import React,{ useState } from 'react';
import {useSelector} from 'react-redux';
import {
  CartArea,
  CartHeader,
  CartIcon,
  CartBody,
  CartText,
  ProductArea,
  ProductQuantityArea,
  ProductPrice,
  ProductPhoto,
  ProductName,
  ProductItem,
  ProductInfoArea,
  ProductQtIcon,
  ProductQtText
} from './styled';


export default () => {

  const products = useSelector(state => state.cart.products);
  const [show, setShow] = useState(true);

  const handleCartClick = () =>{
    setShow(!show)
  }

  const handleProductChange = (item, type) =>{

  }

  return (
    <CartArea>
      <CartHeader onClick={handleCartClick}>
        <CartIcon src="/assets/cart.png"/>
        <CartText>Meu Carrinho ({products.length})</CartText>
        {show && 
          <CartIcon src="/assets/down.png"/>
        }
      </CartHeader>
      <CartBody show={show}>
        <ProductArea>
          {products.map((item, index)=> (
             <ProductItem key={index}>
             <ProductPhoto src={item.image}/>
             <ProductInfoArea>
                <ProductName>{item.name}</ProductName>
                <ProductPrice>R${item.price.toFixed(2)}</ProductPrice>
             </ProductInfoArea>
             <ProductQuantityArea>
                <ProductQtIcon
                  src="/assets/minus.png"
                  onClick={()=>handleProductChange(index, '-')}
                 />
                <ProductQtText>{item.qt}</ProductQtText>
                <ProductQtIcon
                  src="/assets/plus.png"
                  onClick={()=>handleProductChange(index, '+')}
                 />
             </ProductQuantityArea>
           </ProductItem>
          ))}
        </ProductArea>
      </CartBody>
    </CartArea>
  ); 
}
