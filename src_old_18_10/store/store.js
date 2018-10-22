import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export const store=new Vuex.Store({
  state:{
    products:[
    {name:"Banana",price:20},
    {name:"Kivi",price:10}
    ]
  },
  getters:{
  /*  saleProducts:state=>{
      var saleProducts=state.products.map(product =>{
        return {
          name:'**'+product.name +'**',
          price:product.price/2
        }
      });
      return saleProducts
    }*/
  }
})
