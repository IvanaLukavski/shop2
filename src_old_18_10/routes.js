import home from './components/home.vue'
import items from './components/items.vue'
import item_description from './components/item_description.vue'
import cart from './components/cart.vue'

export default[
  {path:'/', component:home},
  {path:'/items', component:items},
  {path:'/cart', component:cart},
  {path:'/item/:id', component:item_description}

]
