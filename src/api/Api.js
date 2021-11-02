
let Base = 'https://api.b7web.com.br/devsfood/api';

export default {
  getCategories: async () => {

    const res = await fetch(Base+'/categories')
    const json = await res.json();
    return json;
  },

  getProducts: async (category, page, search) => {

    let fields ={};
    if(category !== 0){
      fields.category = category;
    }
    if(page > 0){
      fields.page = page;
    }
    if(search !== ''){
      fields.search = search;
    }

    //transforma o objeto em uma string para URL
    let queryString = new URLSearchParams(fields).toString();

    const res = await fetch(Base+'/products?'+queryString);
    const json = await res.json();
    return json;

  }
};