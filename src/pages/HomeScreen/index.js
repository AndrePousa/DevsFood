import React,{ useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, CategoryArea, CategoryList } from './styled'; //arquivo da HomeScreen
import Header from '../../components/Header';
import api from '../../api/Api' //importando a api
import CategoryItem from '../../components/CategoryItem'; //importando o componente 
import ReactTooltip from 'react-tooltip';


export default () => {
    const history = useHistory();

    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(''); //armazena a cateforia ativa no momento
    
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

    },[activeCategory]);

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
        </Container>
    );
}