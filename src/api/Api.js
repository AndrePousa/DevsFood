
let Base = 'https://api.b7web.com.br/devsfood/api';

export default {
  getCategories: async () => {

    const res = await fetch(Base+'/categories')
    const json = await res.json();
    return json;
  },

  getProducts: async () => {

    const res = await fetch(Base+'/products')
    const json = await res.json();
    return json;

  }
};