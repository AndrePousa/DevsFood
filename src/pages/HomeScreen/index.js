import React,{ useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {
     Container,
      CategoryArea, 
      CategoryList,
      ProductArea,
      ProductList,
      ProductPaginationArea,
      ProductPaginationItem
} from './styled'; //arquivo da HomeScreen
import Header from '../../components/Header';
import api from '../../api/Api' //importando a api
import CategoryItem from '../../components/CategoryItem'; //importando o componente 
import ReactTooltip from 'react-tooltip';
import ProductItem from '../../components/ProductItem';
import Modal from '../../components/Modal';
import ModalProduct from '../../components/ModalProduct';

//timer deve ser fiel a varias execuções simultaneas.
let searchTimer = null;

export default () => {
    const history = useHistory();

    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(''); //armazena a categoria ativa no momento
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [activePage, setActivePage] = useState(1);
    const [activeSearch, setActiveSearch] = useState('');
    const [modalStatus, setModalStatus] = useState(false); //status do modal
    const [modalData, setModalData] = useState({});  //informações que irei mandar para o modal

    //fazendo o get
    const getProducts = async () => {
        const prods = await api.getProducts(activeCategory, activePage, activeSearch);
        if(prods.error == ''){
            setProducts(prods.result.data);
            setTotalPages(prods.result.pages)
            setActivePage(prods.result.page)
        }
    }
    
    //monitorao headerSearch, campo de busca, esperando 2s
    useEffect(() => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
            setActiveSearch(headerSearch);
        }, 2000);
    }, [headerSearch])
    
    //fazendo o get
    useEffect(() =>{
        const getCategories = async () => {
            const cat = await api.getCategories();
            if(cat.error == ''){
                setCategories(cat.result);
            } 
            ReactTooltip.rebuild(); //depois de carregar as categorias ele coloca o tooltip
        };
        getCategories(); 
    },[])

    useEffect(() =>{
        setProducts([]);
        getProducts();
    },[activeCategory, activePage, activeSearch]);

    const handleProductClick = (data) =>{
        setModalStatus(true)
        setModalData(data);
    }

    return (
        <Container>
            <Header
                search={headerSearch} 
                onSearch={setHeaderSearch}/>

                {/*se tiverem categories para serem exibidas*/}
                {categories.length > 0 && 
                    <CategoryArea>
                        Selecione uma categoria 
                        <CategoryList> {/*adicionado o icone manualmente*/}
                            <CategoryItem
                                data={{
                                    id:'',  
                                    name:'Todas as categorias',
                                    image:'/assets/food-and-restaurant.png'
                                }}
                                activeCategory={activeCategory} //armazenará o id da categoria que está ativa
                                setActiveCategory={setActiveCategory}
                            />
                            {/*adicionado pela api*/}
                            {categories.map((item, index) =>(
                                <CategoryItem
                                    key={index} 
                                    data={item}
                                    activeCategory={activeCategory}
                                    setActiveCategory={setActiveCategory}
                                />
                            ))}
                        </CategoryList>
                    </CategoryArea>
                }
                {products.length > 0 && 
                <ProductArea>
                    <ProductList>
                        {products.map((item, index) => (
                            <ProductItem
                                key={index}
                                data={item}
                                onClick={handleProductClick}
                            />
                        ))}

                    </ProductList>
                </ProductArea>
                }
                {totalPages > 0 && 
                    <ProductPaginationArea>
                       {Array(totalPages).fill(0).map((item, index) => (
                           <ProductPaginationItem
                            key={index} 
                            active={activePage}
                            current={index + 1}
                            onClick={()=>setActivePage(index + 1)}
                            >
                               {index + 1}
                           </ProductPaginationItem>
                       ))}
                    </ProductPaginationArea>
                }
                <Modal status={modalStatus} setStatus={setModalStatus}> 
                    <ModalProduct data={modalData} setStatus={setModalStatus}/>
                </Modal>
        </Container>
    );
}