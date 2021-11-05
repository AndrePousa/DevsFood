import React,{useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  ProductArea,
  ProductButtons,
  ProductDetails,
  ProductPhoto,
  ProductInfoArea,
  ProductQuantityArea,
  ProductName,
  ProductIngredients,
  ProductButton,
  ProductQuantity,
  ProductQtImage,
  ProductQtText,
  ProductPrice
} from './styled';


export default ({data, setStatus}) => {

  const dispatch = useDispatch();

  const[qt, setqt] = useState(1);

  //sempre que data mudar, a variavel qt volta a 0
  useEffect(() => {
    setqt(1)
  }, [data])

  const handleCancelButton = () => {
    setStatus(false)
  }

  //somente se qt for maior que 1 ele reduz até chegar a 1.
  const handleMinusQt = () => {
    if(qt > 1) {
      setqt(qt -1)
    }
  }

  const handlePlusQt = () => {
    setqt(qt + 1)
  }

  const handleAddToCart = () => {
    dispatch({
      type:'ADD_PRODUCT',
      payload:{data, qt}
    });
    setStatus(false)
  }

  return(
    <Container>
      <ProductArea>
        <ProductPhoto src={data.image}/>
          <ProductInfoArea>
            <ProductDetails>
              <ProductName>
                {data.name}
              </ProductName>
              <ProductIngredients>
                {data.ingredients}
              </ProductIngredients>
            </ProductDetails>
            <ProductQuantityArea>
              <ProductQuantity>
                <ProductQtImage onClick={handleMinusQt} src="/assets/minus.png"/>
                  <ProductQtText>{qt}</ProductQtText>
                <ProductQtImage onClick={handlePlusQt} src="/assets/plus.png"/>
              </ProductQuantity>
              <ProductPrice>
                R${(data.price * qt).toFixed(2)} {/*formatando duas casas decimais*/}
              </ProductPrice>
            </ProductQuantityArea>
          </ProductInfoArea>
      </ProductArea>
      <ProductButtons>
        <ProductButton small={true} onClick={handleCancelButton}>
          Cancelar
        </ProductButton>
        <ProductButton onClick={handleAddToCart}>
          Adicionar ao carrinho
        </ProductButton>
      </ProductButtons>
    </Container>
  )
}
